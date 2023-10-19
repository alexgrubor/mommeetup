'use client'
import { UserButton, useAuth  } from "@clerk/nextjs";
import { useResponsive } from "@/hooks/useResponsive";
import { useState } from "react";
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai";
import {MdMenu} from "react-icons/md";
const Navbar = () => {
  const { isMobile } = useResponsive();
  const {isSignedIn} = useAuth();
  const [isOpenMenu, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isOpenMenu);
  };

  return (
    <header className="bg-cream flex justify-between shadow-xl items-center px-4 h-[5rem]">
      <div className="text-rose text-2xl">Mom Meet Up</div>

      {isMobile ? (
        <div className="flex items-center">
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
              <AiOutlineClose className="text-rose text-2xl" />
            ) : (
              <MdMenu className="text-rose text-2xl" />
            )}
          </button>
        </div>
      ) : (
        <nav className="flex gap-5 text-xl">
          <Link href="/">Home</Link>
          <Link href="/meetings">Meetings</Link>
          <Link href="/forums">Forums</Link>
          <Link href="/chats">Chats</Link>
        </nav>
      )}

      {isMobile && isOpenMenu && (
        <div className="absolute top-[5rem] left-0 bg-lavender">
          <nav className="flex flex-col gap-2 text-xl p-4">
            <Link href="/">Home</Link>
            <Link href="/meetings">Meetings</Link>
            <Link href="/forums">Forums</Link>
            <Link href="/chats">Chats</Link>
          </nav>
        </div>
      )}

      <div className="flex items-center">
        {
          isSignedIn ? <UserButton afterSignOutUrl="/"/> : <Link  className='text-rose text-xl' href="/sign-in"> Sign In</Link>
        }
      </div>
    </header>
  );
};

export default Navbar;