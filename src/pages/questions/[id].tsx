import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import questions from '../../config';
import { useRouter } from 'next/router';
import { updateUserData } from '@/store/slices/poll';
import { useAppSelector } from '@/hooks/redux';
import { IQuestionOption } from '@/models/IQuestion';
import { ArrowIcon } from '@/assets/icons';

import logo from '@/assets/logo.png';
import logoLight from '@/assets/logo-light.png';
import Link from 'next/link';
import { IProps } from './types';
import Head from 'next/head';
import { IUserData } from '@/models/IUserData';
import getFormattedPlaceholder from '@/helpers/getFormattedPlaceholder';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = questions?.map((question) => ({
    params: { id: question?.id?.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {
      id: context.params?.id,
    },
  };
};

const QuestionPage = ({ id }: IProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useAppSelector((state) => state.poll);
  const question = questions?.find((item) => item.id === +id);

  // replace string {placeholder} with actual data from userData
  // example 1 - 'My name is {name}' => 'My name is {getFormattedPlaceholder('name', userData.name)}' => 'My name is {userData.name}' => 'My name is John'
  // example 2 - 'I {hasChildren}' => 'I {getFormattedPlaceholder('hasChildren', userData.hasChildren)}' => 'I {userData.hasChildren ? 'have' : 'don't have'} children'
  const title = question?.title?.replace(/{([^}]+)}/g, (_, match) => {
    const storeKey = match as keyof IUserData;
    const storeValue = (userData as IUserData)[storeKey];

    return getFormattedPlaceholder(storeKey, storeValue);
  });
  const isInfoQuestion = question?.type === 'info';

  const handleOptionClick = (option: IQuestionOption) => {
    if (question?.dataKey && option?.dataValue) {
      dispatch(
        updateUserData({
          dataKey: question?.dataKey,
          dataValue: option?.dataValue,
        })
      );
    }

    const nextQuestionId = option?.getNextQuestionId?.(userData as IUserData);

    if (!nextQuestionId) {
      router.push('/thankyou');
      return;
    }

    router.push({
      pathname: `/questions/${nextQuestionId}`,
    });
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`${
          isInfoQuestion ? 'bg-explanatory-info-bg' : '#FFF0F0'
        } px-4 h-screen`}
      >
        <div className='flex w-full items-center p-4 mb-5'>
          <ArrowIcon
            onClick={router.back}
            className={`cursor-pointer ${
              isInfoQuestion ? '[&>*]:fill-white' : ''
            }`}
          />
          <Link
            className='mx-auto'
            href='https://asknebula.com/'
            target='_blank'
          >
            <Image src={isInfoQuestion ? logoLight : logo} alt='Nebula logo' />
          </Link>
        </div>
        <div className='max-w-[362px] mx-auto flex flex-col'>
          <h1
            className={`font-bold text-[24px] leading-[1.16] ${
              isInfoQuestion ? 'text-[#FBFBFF]' : 'text-[#333]'
            } mb-[30px]`}
          >
            {title}
          </h1>
          {question?.description && (
            <p className='text-[14px] text-[#FBFBFF] leading-[1.8] mb-10'>
              {question?.description}
            </p>
          )}
          <div className='flex flex-col gap-5'>
            {question?.options?.map((option) => (
              <button
                key={option?.dataValue?.toString()}
                onClick={() => handleOptionClick(option)}
                className='bg-button-info w-full px-5 py-3 rounded-2xl border-[1px] border-solid border-[#E0E0E0] hover:bg-button-focus'
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
