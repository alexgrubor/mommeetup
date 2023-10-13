import Image from "next/image";
import MomImage from "../public/imgs/mom.png";
import FlowerDeco from '../public/imgs/flower.png'
import { FaCalendarAlt, FaComments } from 'react-icons/fa';
export default function Home() {
  return (
    <main className="bg-lavender ">
      <section className="text-center flex py-16 relative">
        <Image src={MomImage} alt="mom image"  style={{ width: "50%", height: "50%", objectFit: "cover" }}/>
        <div className="mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-rose font-semibold leading-tight mb-6">
            Welcome to Mom Meet Up
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-rose">
            Where fabulous moms like yourself can connect, share experiences,
            and escape the madness of motherhood together.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-rose">
            Here, we provide an exciting platform for creating meetings, joining
            gatherings, chatting in real-time, and interacting on  forums.
          </p>
          <div className="flex justify-center">
            <a
              href="/sign-up"
              className="bg-rose text-cream py-2 px-4 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-peach hover-text-rose transition duration-300"
            >
              Get Started
            </a>
          </div>
        
          
        </div>
      </section>
    </main>
  );
}
