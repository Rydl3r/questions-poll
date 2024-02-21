import { IUserData } from '@/models/IUserData';

const getFormattedPlaceholder = (
  key: keyof IUserData,
  value: IUserData[keyof IUserData]
): string => {
  if (key === 'isParent') {
    return value ? 'have' : "don't have";
  }

  return value?.toString();
};

export default getFormattedPlaceholder;
