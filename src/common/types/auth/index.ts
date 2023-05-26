import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IPropsLoginPage<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IPropsRegisterPage<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
  isLoading: boolean;
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

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
  userName: string;
}
