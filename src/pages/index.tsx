import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/questions/1`);
  };

  return (
    <>
      <Head>
        <title>OBRIO Test Poll</title>
      </Head>
      <div className='mx-auto text-center max-w-[650px] mt-16 flex flex-col items-center gap-6'>
        <h1 className='text-[40px] font-bold'>
          Welcome to this OBRIO test poll!
        </h1>
        <button
          className='p-4 rounded-2xl w-[300px] bg-button-info transition-all hover:bg-button-focus'
          onClick={handleButtonClick}
        >
          Start!
        </button>
      </div>
    </>
  );
}
