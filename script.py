import os
import cv2
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter
from pillow_heif import register_heif_opener

register_heif_opener()

# CONFIG
INPUT_DIR = Path("input_files")
OUTPUT_DIR = Path("output_web")

# VISUAL SETTINGS
MAX_BASE_WIDTH = 192        # Increased from 64 to 128 for better detail
COLOR_PALETTE = 96          # Increased colors slightly for clarity
SATURATION_BOOST = 1.4      # Makes colors pop
CONTRAST_BOOST = 1.3        # CRITICAL: Helps define edges/shapes
SHARPNESS_BOOST = 2.0       # Helps keep lines crisp before resizing

def process_image(img: Image.Image) -> Image.Image:
    # 1. Convert to RGB
    img = img.convert("RGB")

    # 2. Pre-process (Enhance)
    # Sharpening before downscaling helps preserve features
    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(SHARPNESS_BOOST)
    
    # Boost Contrast (helps separate subject from background)
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(CONTRAST_BOOST)

    # Boost Saturation
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(SATURATION_BOOST)

    # 3. Downscale to target width
    w, h = img.size
    if w > MAX_BASE_WIDTH:
        new_h = int(h * (MAX_BASE_WIDTH / w))
        # use BOX or BILINEAR filter for better downscaling quality than NEAREST
        img = img.resize((MAX_BASE_WIDTH, max(1, new_h)), Image.BOX)
    
    # 4. Reduce Colors (Quantize)
    if COLOR_PALETTE:
        # dithering=Image.NONE gives a cleaner look, 
        # dithering=Image.FLOYDSTEINBERG gives a grainy/noisy look.
        # We use NONE here for cleaner shapes.
        img = img.convert("P", palette=Image.ADAPTIVE, colors=COLOR_PALETTE, dither=Image.NONE)
        
    return img

def save_static(file_path):
    try:
        img = Image.open(file_path)
        pixel_small = process_image(img)
        out_path = OUTPUT_DIR / (file_path.stem + "_bg.png")
        pixel_small.save(out_path, format="PNG", optimize=True)
        print(f"✅ Saved Static: {out_path.name}")
    except Exception as e:
        print(f"❌ Error on {file_path.name}: {e}")

def save_animated(file_path):
    try:
        cap = cv2.VideoCapture(str(file_path))
        frames = []
        
        while True:
            ret, frame = cap.read()
            if not ret: break
            
            # Skip frames (process every 2nd frame for 15fps feel)
            if int(cap.get(cv2.CAP_PROP_POS_FRAMES)) % 2 != 0:
                continue
                
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            pil_img = Image.fromarray(frame_rgb)
            frames.append(process_image(pil_img))

        cap.release()

        if frames:
            out_path = OUTPUT_DIR / (file_path.stem + "_bg.gif")
            frames[0].save(
                out_path,
                format="GIF",
                save_all=True,
                append_images=frames[1:],
                optimize=True,
                duration=66, # ~15fps
                loop=0
            )
            print(f"✅ Saved Animation: {out_path.name}")
    except Exception as e:
        print(f"❌ Error on {file_path.name}: {e}")

def convert_folder():
    INPUT_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    files = sorted([p for p in INPUT_DIR.iterdir()])
    print(f"Found {len(files)} files...")

    for f in files:
        if f.suffix.lower() in {".heic", ".jpg", ".jpeg", ".png"}:
            save_static(f)
        elif f.suffix.lower() in {".mov", ".mp4"}:
            save_animated(f)

if __name__ == "__main__":
    convert_folder()