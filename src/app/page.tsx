import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="text-right p-4 text-gray-500 text-lg">
          <div>Jupiter Technology Solutions</div>
          <div className="text-sm">kaiser.al@jupiterts.com</div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center p-24">
          <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/jts.svg"
              alt="JTS Logo"
              width={200}
              height={100}
              priority
            />
          </div>
        </main>

        <footer className="text-center p-4 text-gray-500">
          Jupiter Technology Solutions, Inc. | Email: kaiser.al@jupiterts.com
        </footer>
      </div>
    </>
  );
}
