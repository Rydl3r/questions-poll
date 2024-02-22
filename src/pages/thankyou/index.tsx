import InfoScreen from '@/components/InfoScreen';
import { useAppDispatch } from '@/hooks/redux';
import { resetUserData } from '@/store/slices/poll';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ThankYou() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    // to reset the poll, we need to reset the user answers from the store using the resetUserData action,
    // and then redirect the user to the initial page of the poll.
    dispatch(resetUserData());
    router.push(`/`);
  };

  return (
    <>
      <Head>
        <title>Thank you for completing the poll!</title>
      </Head>
      <InfoScreen
        title='Thank you for completing the poll!
          Our specialists will get back to you soon.'
        buttonText='Restart poll'
        onSubmit={handleButtonClick}
      />
    </>
  );
}
