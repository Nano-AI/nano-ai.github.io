// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);
function drawMatrix() {
  ctx.fillStyle = 'rgba(17,17,17,0.15)';
  ctx.fillRect(0, 0, width, height);
  ctx.font = fontSize + "px Fira Mono, Menlo, Monaco, Consolas, monospace";
  ctx.fillStyle = '#00ff00';
  for (let i = 0; i < drops.length; i++) {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 50);
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

// Terminal Tree Nav Web Component
class TreeNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
    this.addListeners();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .tree-nav {
          background: #101613;
          color: #00913a;
          font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
          width: 260px;
          height: 100%;
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .tree-block {
          white-space: pre;
          font-size: 1rem;
          padding: 2.5rem 1.5rem 0.5rem 2.5rem;
          background: #101613;
          line-height: 1.7;
        }
        .tree-btn {
          background: none;
          border: none;
          color: #00913a;
          font-family: inherit;
          font-size: 1rem;
          padding: 0;
          margin: 0;
          border-radius: 0;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          outline: none;
          display: inline;
        }
        .tree-btn.selected, .tree-btn:focus, .tree-btn:hover {
          background: #00913a;
          color: #101613;
          border-radius: 0;
        }
      </style>
      <div class="tree-nav">
        <div class="tree-block">
<b>$</b> tree
├── <button class="tree-btn" data-section="about">about.txt</button>
├── <button class="tree-btn" data-section="projects">projects.txt</button>
├── <button class="tree-btn" data-section="experiences">experiences.txt</button>
├── <button class="tree-btn" data-section="academics">academics.txt</button>
└── <button class="tree-btn" data-section="hobbies">hobbies.txt</button>
        </div>
      </div>
    `;
  }
  addListeners() {
    const items = this.shadowRoot.querySelectorAll('.tree-btn');
    items.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.main-section').forEach(div => div.classList.add('hidden'));
        document.getElementById('section-' + btn.dataset.section).classList.remove('hidden');
        document.getElementById('section-title').textContent = btn.dataset.section === 'about' ? 'about.txt' : btn.dataset.section === 'projects' ? 'projects.txt' : btn.dataset.section === 'experiences' ? 'experiences.txt' : 'academics.txt';
        items.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
    // Default selection
    setTimeout(() => {
      items[0].classList.add('selected');
    }, 0);
  }
}
customElements.define('tree-nav', TreeNav);

function showCategory(cat) {
  document.querySelectorAll('.project-category').forEach(div => div.classList.add('hidden'));
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('ring', 'ring-2'));
  document.getElementById('project-category-placeholder').style.display = 'none';
  if (cat) {
    document.getElementById('category-' + cat).classList.remove('hidden');
    const btn = Array.from(document.querySelectorAll('.category-btn')).find(b => b.textContent.toLowerCase().includes(cat));
    if (btn) btn.classList.add('ring', 'ring-2');
  }
}
// Show About by default
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.main-section').forEach(div => div.classList.add('hidden'));
  document.getElementById('section-about').classList.remove('hidden');
  document.getElementById('section-title').textContent = 'about.txt';
  // Show project placeholder by default
  var placeholder = document.getElementById('project-category-placeholder');
  if (placeholder) placeholder.style.display = '';
  document.querySelectorAll('.project-category').forEach(div => div.classList.add('hidden'));
  // Move the placeholder above the category buttons if not already
  var catBtns = document.querySelector('.project-categories');
  if (placeholder && catBtns && placeholder.parentNode !== catBtns.parentNode) {
    catBtns.parentNode.insertBefore(placeholder, catBtns);
  }
});
