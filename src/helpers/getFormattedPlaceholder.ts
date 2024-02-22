import { IUserData } from '@/models/IUserData';

// replace string {placeholder} with actual data from userData
// example 1 - 'My name is {name}' => 'My name is {getFormattedPlaceholder('name', userData.name)}' => 'My name is {userData.name}' => 'My name is John'
// example 2 - 'I {isParent}' => 'I {getFormattedPlaceholder('isParent', userData.isParent)}' => 'I {userData.isParent ? 'have' : 'don't have'} children'
const getFormattedPlaceholder = (
  key: keyof IUserData,
  value: IUserData[keyof IUserData]
): string => {
  if (key === 'isParent')
    return value ? 'have children' : "doesn't have children";
  if (key === 'isSingle') return value ? 'single ' : '';

  return value?.toString();
};

export default getFormattedPlaceholder;
