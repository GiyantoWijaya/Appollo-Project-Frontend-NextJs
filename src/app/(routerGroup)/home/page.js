// 'use client';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navbar/NavBar';
import Image from 'next/image';
import '../../../app/globals.css';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <main className="bg-[#0c0d14] items-center min-h-screen">
        <div className="flex flex-row justify-evenly my-12">
          <div className="flex flex-col basis-2/5">
            <h1 className="text-white text-7xl ">
              let the GAME <br />
              kill your boredom
            </h1>
            <p className="text-white w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna mauris, porta ac auctor sed, tincidunt
              sed libero. Ut vel tincidunt eros, venenatis euismod sem. Aliquam vitae volutpat risus, Pellentesque in
              nulla eleifend diam portittor congue.
            </p>
            <button className="bg-[#fb6f92] rounded-full w-24 ">PLAY</button>
          </div>
          <div className="basis 1/4">
            <Image src="/Pacman1.png" alt="Logo" width={350} height={350} />
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
