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

const font = Comfortaa({
  weight: '400',
  subsets: ['latin']
});

const scores = [
  { exam: 'AP Calculus AB', score: 5 },
  { exam: 'AP Biology', score: 4 },
  { exam: 'AP English Literature', score: 3 },
];

export default function Home() {
  return (
    <div className={font.className}>
      <div className={"vh-100 vw-100"}>
        <Parallax pages={5} className="h-100 bg-background">
          <ParallaxLayer offset={0} speed={1}>
            <div className='w-screen h-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2">hi, my name is</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2'>
                  <b>aditya bankoti.</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={1} speed={0.9}>
            <div className='w-screen h-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <div className='w-screen h-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-sm backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s some of my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>projects</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.1} speed={1.25}>
            <div className="w-100 h-100 m-10 d-flex justify-center items-center">
              <Image className="my-5 m-auto d-block object-cover w-9/12" alt="litterly image" src={LitterLy} />
              {/* <span className="text-white text-lg text-center">a social networking platform to create a cleaner world. made for the 2023 hackpnw event.</span> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.55} speed={1.25}>
            <div className="w-100 h-100 m-10 d-flex justify-center items-center float-right" >
              <Image className="my-5 h-1/6 object-cover w-auto" alt="litterly image" src={Chess} />
              {/* <span className="text-white text-lg text-center">a social networking platform to create a cleaner world. made for the 2023 hackpnw event.</span> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={1.25}>
            <div className="w-100 h-100 m-10 d-flex justify-center items-center float-end">
              <Image className="my-5 w-auto h-1/6 object-cover" alt="litterly image" src={Spotube} />
              {/* <span className="text-white text-lg text-center">a social networking platform to create a cleaner world. made for the 2023 hackpnw event.</span> */}
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.9}>
            <div className='w-screen h-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-lg backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <div className='w-screen h-screen flex font-bold items-center justify-center'>
              <div className='w-2/6 py-8 rounded backdrop-blur-sm backdrop-grayscale'>
                <div className="text-primary text-lg my-2 text-center">here&apos;s my</div>
                <div className='text-6xl text-violet-600 text-white display-1 my-2 text-center'>
                  <b>academics</b>
                </div>
              </div>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={2.2} speed={1.25}>

          </ParallaxLayer>
          <ParallaxLayer offset={2.3} speed={1.25} className="flex flex-row align-items-center w-100 content-center justify-center items-center">
            <div className="shadow rounded-lg w-80 bg-pureWhite ap-holder mx-10">
              <div className="overlay p-5 text-pureWhite ap-bg ap-img rounded-t-lg" style={{ backgroundImage: `url(${APCalcBG.src})` }}>
                AP Calculus AB
              </div>
              <div className="ap-holder p-5">
                <div className="ap-border ap-text" style={{ backgroundImage: `url(${APBorder.src})` }}>
                  5
                </div>
              </div>
            </div>
            <div className="shadow rounded-lg w-80 bg-pureWhite ap-holder mx-10">
              <div className="overlay p-5 text-pureWhite ap-bg ap-img rounded-t-lg" style={{ backgroundImage: `url(${APCSABG.src})` }}>
                AP Computer Science A
              </div>
              <div className="ap-holder p-5">
                <div className="ap-border ap-text" style={{ backgroundImage: `url(${APBorder.src})` }}>
                  5
                </div>
              </div>
            </div><div className="shadow rounded-lg w-80 bg-pureWhite ap-holder mx-10">
              <div className="overlay p-5 text-pureWhite ap-bg ap-img rounded-t-lg" style={{ backgroundImage: `url(${APEuroBG.src})` }}>
                AP European History
              </div>
              <div className="ap-holder p-5">
                <div className="ap-border ap-text" style={{ backgroundImage: `url(${APBorder.src})` }}>
                  4
                </div>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  )
}
