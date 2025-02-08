import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Navigation = () => (
  <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
    {[
      { href: "/", text: "Home" },
      { href: "/features", text: "Features" },
      { href: "/pricing", text: "Pricing" },
      { href: "/blog", text: "Blog" },
    ].map(({ href, text }) => (
      <Link
        key={text}
        href={href}
        className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 transition-colors"
      >
        {text}
      </Link>
    ))}
  </nav>
);

const AuthButtons = () => (
  <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
    <Link
      href="/signin"
      className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition-colors hover:text-gray-900"
    >
      Sign in
    </Link>
    <Link
      href="/signup"
      className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors"
    >
      Sign up
    </Link>
  </div>
);

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <header className="w-full px-8 text-custom-1 bg-custom-3">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link href="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                <img src="/logo.webp" alt="logo" className="h-12 rounded-full" /> 
              </span>
              <span className="text-xl pl-2 text-custom-1 bold">Bristo</span> 
            </Link>
            <Navigation />
          </div>
          <AuthButtons />
        </div>
      </header>

      <div className="flex-1 flex items-center bg-custom-3">
        <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
          <div className="items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-7xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline"> Your Digital</span>{" "}
                <span className="block text-indigo-600 xl:inline">Innovation Partner</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  We create cutting-edge websites and applications that transform your ideas into reality. From concept to launch, we're your complete digital solution provider.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                  href="/contact"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto transition-colors"
                  >
                  Start Your Project
                  <FaArrowRight className="ml-2" />
                  </Link>
                    <Link
                    href="/portfolio"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 transition-colors shadow-[10px_4px_6px_rgba(255,255,255,0.1)]"
                    >
                    View Our Work
                    </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
