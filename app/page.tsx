import Image from "next/image";
import MomImage from "../public/imgs/mom.png";
import FlowerDeco from '../public/imgs/flower.png'
import HeroSection from "@/components/HeroSection";
import { FaCalendarAlt, FaComments } from 'react-icons/fa';
export default function Home() {
  return (
    <main className="bg-lavender ">
     <HeroSection/>
    </main>
  );
}
