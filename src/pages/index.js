import Image from "next/image";
import localFont from "next/font/local";

import NavBar from "@/Components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <NavBar title={'PROJECT 29'} />
      {/* <h1 className="text-center mt-10 font-bold text-3xl">Secure User Varification And Credentials Tokenization For Modern Applications</h1> */}
      <div className='heading'>
        <h1>Share the Joy of Reading</h1> 
        <p>Donate your books and make a diffrence in someone's life.</p>
      </div>

      <div className='content'>
        <div className='section'>
          <h2>Why Donate?</h2>
          <ol>
            <li>Help others read</li>
            <li>Reuse books</li>
            <li>Support those in need</li>
            <li>Free up space</li>
          </ol>
        </div>
        <div className='section'>
          <h2>How It Works</h2>
          <ol>
            <li>Sign up</li>
            <li>List books</li>
            <li>Connect</li>
            <li>Share books</li>
          </ol>
        </div>
        <div className='span-full section'>
          <h2>Join Out Community</h2>
          <p>Stay updated with our latest events and book donations</p>
          <div className='subcribe'>
            <input placeholder='Enter your Email' />
            <button className='primary'>Subcribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
