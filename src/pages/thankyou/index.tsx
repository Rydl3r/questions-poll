import { useAppDispatch } from '@/hooks/redux';
import { resetUserData } from '@/store/slices/poll';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(resetUserData());
    router.push(`/`);
  };

  return (
    <>
      <Head>
        <title>Thank you for completing the poll!</title>
      </Head>
      <div className='mx-auto text-center max-w-[900px] mt-16 flex flex-col items-center gap-6'>
        <h1 className='text-[40px] font-bold'>
          Thank you for completing the poll! <br />
          Our specialists will get back to you soon.
        </h1>
        <button
          className='p-4 rounded-2xl w-[300px] bg-button-info transition-all hover:bg-button-focus'
          onClick={handleButtonClick}
        >
          Restart poll
        </button>
      </div>
    </>
  );
}
