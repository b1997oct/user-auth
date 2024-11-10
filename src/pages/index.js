import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
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
      <h1 className="text-center mt-10 font-bold text-3xl">Secure User Varification And Credentials Tokenization For Modern Applications</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10 md:mx-10">

        <div className="border shadow text-center p-8 rounded-xl">
          <h2 className="text-3xl font-bold">User Varification</h2>
          <div className="flex gap-4 justify-center mt-4">
            <Link href={'/account'} target="_blank" className="py-1 px-4 border">User</Link>
            <Link href={'/admin/users'} target="_blank" className="bg-green-300 py-1 px-4">Admin</Link>
          </div>
        </div>

        <div className="border shadow text-center p-8 rounded-xl">
          <h2 className="text-3xl font-bold">Bcrypt Hashing</h2>
          <div className="flex gap-4 justify-center mt-4">
            <Link href={'/forgot-password'} target="_blank" className="py-1 px-4 border">User</Link>
            <Link href={'/account'} target="_blank" className="bg-green-300 py-1 px-4">Admin</Link>
          </div>
        </div>

        {/* <div className="border shadow text-center p-8 rounded-xl">
          <h2 className="text-3xl font-bold">User Access Control</h2>
          <div className="flex gap-4 justify-center mt-4">
            <Link href={'/user-access-control?admin=true'} target="_blank" className="py-1 px-4 border">Open</Link>
          </div>
        </div> */}

        <div className="border shadow text-center p-8 rounded-xl">
          <h2 className="text-3xl font-bold">DDOS</h2>
          <div className="flex gap-4 justify-center mt-4">
            <Link href={'/ddos'} target="_blank" className="py-1 px-4 border">User</Link>
            <Link href={'/admin/ddos'} target="_blank" className="bg-green-300 py-1 px-4">Admin</Link>
          </div>
        </div>



        <div className="border shadow text-center p-8 rounded-xl">
          <h2 className="text-3xl font-bold">API Auth</h2>
          <div className="flex gap-4 justify-center mt-4">
            <Link href={'/api-auth'} target="_blank" className="py-1 px-4 border">User</Link>
            <Link href={'/account'} target="_blank" className="bg-green-300 py-1 px-4">Admin</Link>
          </div>
        </div>

      </div>

    </div>
  );
}
