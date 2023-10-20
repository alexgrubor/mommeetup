"use client";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {  FaHandshake, FaUsers } from "react-icons/fa";
import { RiWomenFill } from "react-icons/ri";
import { GiRun } from "react-icons/gi";
const HeroSection = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="text-center flex flex-col gap-1 md:gap-4 justify-center min-h-screen py-16 relative overflow-hidden">
      <div className="absolute top-9 left-[-34px] bg-rose px-8 transform rotate-[-45deg] z-10 text-cream">MOM&apos;S AREA</div>
      <div className="mx-auto p-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-rose font-semibold leading-tight mb-6 flex justify-center items-center gap-2">
          <span className="inline-block text-peach">
            <FaUsers />
          </span>
          Welcome to Mom Meet Up
          <span className="inline-block text-peach">
            <RiWomenFill />
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl lg:max-w-[80%] text-rose">
          Where fabulous moms like yourself can
          <span className="inline-block text-peach mx-2">
            <FaHandshake size={20} />
          </span>
          connect, share experiences, and
          <span className="inline-block text-peach mx-2">
            <GiRun size={20} />
          </span>
          escape the madness of motherhood together.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-8   lg:max-w-[70%]">
          Here, we provide an exciting platform for creating meetings, joining
          gatherings, chatting in real-time, and interacting on forums.
        </p>
        <div className="flex justify-center">
          {isSignedIn ? (
            <Link
              href="/meetings"
              className="bg-rose border-2 border-black  py-2 px-4 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-peach hover:text-cream transition duration-300"
            >
              Create a meeting
            </Link>
          ) : (
            <Link
              className="bg-rose flex justify-center items-center shadow-xl py-2 px-4 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-peach hover:text-cream transition duration-300"
              href="/sign-in"
            >
              Join to our family
            </Link>
          )}
        </div>
      </div>
      <div className="p-4 animate-images">
        <div className="rounded-lg shadow-md">
          <Image
            src="https://images.pexels.com/photos/4473870/pexels-photo-4473870.jpeg"
            alt="Image 1"
            className="w-full h-full hover:scale-110 transition duration-300 rounded-lg"
            width={300}
            height={200}
          />
        </div>
        <div className="rounded-lg shadow-md mt-4">
          <Image
            src="https://images.pexels.com/photos/5094681/pexels-photo-5094681.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 2"
            className="w-full h-full hover:scale-110 transition duration-300 rounded-lg"
            width={300}
            height={200}
          />
        </div>
        <div className="rounded-lg shadow-md ">
          <Image
            src="https://images.pexels.com/photos/5996967/pexels-photo-5996967.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 3"
            className="w-full h-full hover:scale-110 transition duration-300 rounded-lg"
            width={300}
            height={200}
          />
        </div>
        <div className="rounded-lg shadow-md mt-4">
          <Image
            src="https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 4"
            className="w-full h-full hover:scale-110 transition duration-300 rounded-lg"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
