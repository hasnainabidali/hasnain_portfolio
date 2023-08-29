import Head from 'next/head';
import { Header } from '@/components';
import { HomeHero } from '@/Layout';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Lottie Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div className="bg-black">
          <HomeHero />
        </div>
      </main>
    </div>
  );
}
