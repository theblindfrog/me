import Link from "next/link";
import Image from "next/image";
import { IBM_Plex_Serif } from "next/font/google";
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500",],
});


export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-0">
        <Link href="/">
          <Image
            src="/img/me.jpg"
            alt="Photo of Alexander Powell"
            width={64}
            height={64}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full  ring-2 ring-white shadow mb-4 md:mb-0 md:mr-6 hover:ring-primary-500/20 transition-all duration-300"
          />
        </Link>
        <div>
          <h1 className={`${ibmPlexSerif.className} text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-0`}>
            <Link className="hover:text-primary-600 transition-colors" href="/">
              Alexander Powell
            </Link>
          </h1>
          <p className="text-base text-blue-700/80 -mt-1">Product Engineer</p>
        </div>
      </div>
      <nav className="text-md font-medium text-gray-700">
        <ul className="flex space-x-6">
          <li>
            <Link
              className="hover:text-primary-600 transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary-600 transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primary-600 transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1"
              href="/cv"
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
