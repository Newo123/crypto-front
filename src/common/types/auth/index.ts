import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLoginPage<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}

export interface IPropsRegisterPage {
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setRepeatPassword: (value: string) => void;
  setUserName: (value: string) => void;
  navigate: (to: string) => void;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
}

interface IPublicUser {
  id: number | null;
  name: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchList: [IWatchList];
}

interface IWatchList {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}
