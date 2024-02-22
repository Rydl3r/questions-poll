import { IProps } from './types';

const InfoScreen: React.FC<IProps> = ({ title, buttonText, onSubmit }) => {
  return (
    <div className='bg-paper-info px-4 h-screen'>
      <div className='max-w-80 sm:max-w-96 mx-auto flex flex-col pt-16 px-4'>
        <h1 className='font-bold text-3xl $text-dark mb-8 text-center'>
          {title}
        </h1>
        <button
          onClick={onSubmit}
          className='bg-button-info w-full px-5 py-3 rounded-2xl border border-solid border-light shadow-button-dark hover:bg-gradient-primary hover:text-light'
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InfoScreen;
