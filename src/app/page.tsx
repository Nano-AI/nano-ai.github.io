"use client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Comfortaa } from 'next/font/google';
import Image from 'next/image';

// import Chess from "./assets/chess.png";
// import LitterLy from "./assets/litterlylogo.png";
// import Spotube from "./assets/spotube.png";

import APCalcBG from "./assets/img-calc-ab-bc-3-4.webp";
import APEuroBG from "./assets/img-euro-history-13.webp";
import APCSABG from "./assets/img-csa-8.webp";

import APBorder from "./assets/illustration-score-5.svg";

import L1Clouds1 from "./assets/layers/layer1/clouds_1.png";
import L1Clouds2 from "./assets/layers/layer1/clouds_2.png";
import L1Ground1 from "./assets/layers/layer1/ground_1.png";
import L1Ground2 from "./assets/layers/layer1/ground_2.png";
import L1Ground3 from "./assets/layers/layer1/ground_3.png";
import L1Plant from "./assets/layers/layer1/plant.png";
import L1Rocks from "./assets/layers/layer1/rocks.png";
import L1Sky from "./assets/layers/layer1/sky.png";

// import L2Birds from "./assets/layers/layer2/birds.png";
// import L2Clouds1 from "./assets/layers/layer2/clouds_1.png";
// import L2Clouds2 from "./assets/layers/layer2/clouds_2.png";
// import L2Clouds3 from "./assets/layers/layer2/clouds_3.png";
// import L2Pines from "./assets/layers/layer2/pines.png";
// import L2Rocks1 from "./assets/layers/layer2/rocks_1.png";
// import L2Rocks2 from "./assets/layers/layer2/rocks_2.png";
// import L2Rocks3 from "./assets/layers/layer2/rocks_3.png";
// import L2Sky from "./assets/layers/layer2/sky.png";

interface Score {
  name: string;
  score: number;
  src: string
};

interface Project {
  name: string;
  url: string;
  src?: string;
  customHeader?: any;
  description: string;
};

const font = Comfortaa({
  weight: '400',
  subsets: ['latin']
});

const scores: Score[] = [
  { name: 'AP Calculus AB', score: 5, src: APCalcBG.src },
  { name: 'AP Computer Science A', score: 5, src: APCSABG.src },
  { name: 'AP European History', score: 4, src: APEuroBG.src },
  { name: 'AP Caluclus BC', score: 5, src: APCalcBG.src },
  { name: 'AP English Language and Composition', score: 5, src: APEuroBG.src },
  { name: 'AP Physics C: Mechanics', score: 4, src: APCalcBG.src },
  { name: 'AP United States History', score: 5, src: APEuroBG.src }
];

const projects: Project[] = [
  { 
    name: 'SAT-Shark', 
    url: 'https://www.youtube.com/watch?v=mAVRRUz1FxE',
    description: 'SATShark is an innovative multiplayer educational game designed to enhance SAT preparation while engaging in competitive gameplay.',
    customHeader: (
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/mAVRRUz1FxE?si=bWYQC8MivUPkTcIy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  },
  {
    name: 'CleanEats',
    url: 'https://github.com/Nano-AI/CleanEats',
    description: 'CleanEats is an app that increases public nutrition awareness by letting users scan food barcodes to instantly access vital nutritional and health information.',
    customHeader: (
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/FSq0EKt5-Bs?si=m2lhVOGIe6X8A3is" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  },
  {
    name: 'Litter.ly',
    url: 'https://github.com/Nano-AI/litter.ly',
    description: 'A social networking platform to create a cleaner world.',
    customHeader: (
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/dlUDO7SRVz8?si=YHSu3btQeEdi_V1v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  },
  {
    name: 'Spotube',
    url: 'https://github.com/Nano-AI/Spotube-Old',
    description: 'Free alternate Spotify clone that utilizes YouTube to search, find, and play songs.',
    customHeader: (
      <iframe className="w-full h-full" src="https://www.youtube.com/embed/mr68HNktvD4?si=mulRkgUTwmgN4yFP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  }
];


export default function Home() {
  return (
    <div className={font.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div>
        <Parallax pages={5} className="h-100 bg-background animation" style={{ top: '0', left: '0' }}>
          <ParallaxLayer offset={0} speed={1}>
            <Image src={L1Sky.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <Image src={L1Rocks.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <Image src={L1Clouds1.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <Image src={L1Clouds2.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.33}>
            <Image src={L1Ground1.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.66}>
            <Image src={L1Ground2.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
            </ParallaxLayer>
           <ParallaxLayer offset={0} speed={1}>
            <Image src={L1Ground3.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <Image src={L1Plant.src} alt="sky" className="w-screen h-screen" width={1} height={1} />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={1}>
            <div className='h-screen w-screen flex font-bold items-center justify-center'>
              <div className='py-8 backdrop-blur-lg px-11 -z-50 rounded-lg'>
                <div className="text-primary text-lg my-2">hi, my name is</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2'>
                  <b>aditya bankoti.</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

{/* idk how i made this fix but i am very proud of it */}
          <ParallaxLayer offset={0} speed={1} className="bg-background h-full text-white p-28" style={{marginTop: "100vh"}}>
            <h1>About Me</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1} className="bg-background h-full">
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-full py-8 rounded backdrop-blur-lg '>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-full py-8 rounded backdrop-blur-sm -z-50'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.3} speed={1} className="h-full ">
            <div className="!grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-10 gap-4">
            {
              projects.map((v, i) => {
                return (
                  <div className="rounded overflow-hidden shadow-lg bg-white z-50" key={v.name}>
                    {/* <Image className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="w-full">
                      {v.customHeader ? v.customHeader : <></>}
                    </div>
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div className="px-6 py-6 my-4">
                      <div className="font-bold text-xl mb-2">
                        <a href={v.url} className="fancy">{v.name}</a>
                      </div>
                      <p className="text-gray-700 text-base max-h-full w-full">
                        {v.description}
                      </p>
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                    </div> */}
                  </div>
                );
              })
            }
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-full py-8 rounded backdrop-blur-lg  z-0'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-full py-8 rounded backdrop-blur-sm '>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.3} speed={1.25} className="">
            <div className="grid content-normal lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 align-items-center justify-center items-center w-full px-24 gap-y-10 gap-x-5">
              {
                scores.map(v => {
                  return (
                    <div className="shadow rounded-lg bg-pureWhite ap-holder w-100 h-100" key={v.name}>
                        <div className="overlay p-5 text-pureWhite ap-bg ap-img rounded-t-lg truncate" style={{ backgroundImage: `url(${v.src})` }}>
                          <b>{v.name}</b>
                        </div>
                        <div className="ap-holder p-5">
                          <div className="ap-border ap-text" style={{ backgroundImage: `url(${APBorder.src})` }}>
                            {v.score}
                          </div>
                        </div>
                    </div>
                  );
                })
              }
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}
