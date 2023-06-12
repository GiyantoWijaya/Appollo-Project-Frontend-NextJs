'use client';

import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import '../../app/globals.css';

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSignUp = (event) => {
    router.push('/authentication/register');
    setIsLoading(true);
  };
  const handleLogOut = (event) => {
    Cookies.remove('token');
    Cookies.remove('userId');
    Cookies.remove('username');
    router.push('/');
    setIsLoading(true);
  };

  const isLoggedIn = Cookies.get('token');

  return (
    <>
      <nav className="bg-[#1f2030]">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex-items-center">
              <Link href="/home" className="flex items-center text-white no-underline font-bold text-xl">
                <Image src="/apollo.png" alt="Logo" width={24} height={24} />
                <span className="ml-2">Apollo Games</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center">
                <Link href="/gamedetail" className="mr-4 no-underline text-white">
                  Leaderboard
                </Link>
                <Link href="/profile" className="mr-4 no-underline text-white">
                  Profile
                </Link>
                <form className="flex items-center relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-3 py-1 bg-[#4c4d59] placeholder-white rounded-full focus:outline-none"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                    <Image src="/glass.png" alt="search" width={16} height={16} />
                  </div>
                </form>
                {isLoggedIn && (
                  <>
                    <Link href="/gamecatalog" className="ml-4 no-underline text-white">
                      myGames
                    </Link>
                    <Image
                      src="/person.png"
                      alt="Profile Picture"
                      width={32}
                      height={32}
                      className="ml-6 rounded-full inline-block border border-white overflow-hidden"
                    />
                    <button onClick={handleLogOut} className="bg-[#5c7cfa] rounded-full text-white ml-4 w-20">
                      {isLoading ? <Spinner /> : 'Log out'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
