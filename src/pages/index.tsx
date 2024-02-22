import InfoDisplay from '@/components/InfoDisplay';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    // to start the poll, we need to redirect the user to the first question
    router.push(`/questions/1`);
  };

  return (
    <>
      <Head>
        <title>OBRIO Test Poll</title>
      </Head>
      <InfoDisplay
        title='Welcome to this OBRIO test poll!'
        buttonText='Start!'
        onSubmit={handleStart}
      />
    </>
  );
}
