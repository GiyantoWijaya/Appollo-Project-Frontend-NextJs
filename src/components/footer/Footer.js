'use client';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1f2030] py-5 flex flex-col md:flex-row justify-between">
      <div className="px-5 flex flex-col text-center">
        <p className="text-white md:text-left">&copy; Apollo Developer Team 2023</p>
        <p className="text-white md:text-left">
          Here each game is beautifully created with simplicity. <br /> You will find great & simple games to kill your
          time.
        </p>
        <div className="py-2 flex flex-row justify-between">
          <Link href="https://www.apple.com">
            <AppleIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
          <Link href="https://www.google.com">
            <ShopIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
          <Link href="https://www.youtube.com">
            <YouTubeIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
          <Link href="https://www.linkedin.com">
            <LinkedInIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
          <Link href="https://www.twitter.com">
            <TwitterIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
          <Link href="https://www.instagram.com">
            <InstagramIcon sx={{ color: 'white' }} fontSize="large" />
          </Link>
        </div>
      </div>
      <div className="px-5 flex flex-col justify-evenly text-center">
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          Support
        </Link>
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          Advertise
        </Link>
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          About us
        </Link>
      </div>
      <div className="px-5 flex flex-col justify-evenly text-center">
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          Contact
        </Link>
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          Careers
        </Link>
        <Link href="#" className="py-2 text-white text-xl no-underline font-bold md:text-left">
          Help
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
