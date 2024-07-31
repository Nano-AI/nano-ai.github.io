"use client";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Comfortaa } from 'next/font/google';
import Image from 'next/image';

import Chess from "./assets/chess.png";
import LitterLy from "./assets/litterlylogo.png";
import Spotube from "./assets/spotube.png";

import APCalcBG from "./assets/img-calc-ab-bc-3-4.webp";
import APEuroBG from "./assets/img-euro-history-13.webp";
import APCSABG from "./assets/img-csa-8.webp";

import APBorder from "./assets/illustration-score-5.svg";

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
      <div className={"vh-100 vw-100"}>
        <Parallax pages={5} className="h-100 bg-background">
          <ParallaxLayer offset={0} speed={1}>
            <div className='h-screen w-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2">hi, my name is</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2'>
                  <b>aditya bankoti.</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={1} speed={0.9}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-sm backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.3} speed={1.25} className="grid grid-cols-4 px-10 gap-4 grid-rows-2 h-screen content-stretch">
            {
              projects.map(v => {
                return (
                  <div className="rounded overflow-hidden shadow-lg bg-white" key={v.name}>
                    {/* <Image className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="w-full h-72">
                      {v.customHeader ? v.customHeader : <></>}
                    </div>
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div className="px-6 py-6 my-4">
                      <div className="font-bold text-xl mb-2">
                        <a href={v.url} className="fancy">{v.name}</a>
                      </div>
                      <p className="text-gray-700 text-base">
                        {v.description}
                      </p>
                    </div>
                    {/* <div className="px-6 pt-4 pb-2">
                    </div> */}
                  </div>
                );
              })
            }
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.9}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <div className='w-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-sm backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1.25} className="grid content-center align-middle lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 align-items-centerr justify-center items-center min-w-full p-24 gap-y-10 gap-x-5">
            {
              scores.map(v => {
                return (
                  <div className="shadow rounded-lg bg-pureWhite ap-holder w-100 h-100" key={v.name}>
                    <div className="overlay p-5 text-pureWhite ap-bg ap-img rounded-t-lg" style={{ backgroundImage: `url(${APEuroBG.src})` }}>
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
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}
