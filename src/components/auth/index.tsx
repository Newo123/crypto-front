import { Box } from '@mui/material';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppError } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import LoginPage from './login';
import RegisterPage from './register';
import styles from './style.module.scss';

const AuthRootComponent: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log('errors', errors);

  const handleSubmitForm = async (data: any) => {
    console.log('data', data);
    if (location.pathname === '/login') {
      try {
        const user = await instance.post('/auth/login', {
          email: data.email,
          password: data.password,
        });
        await dispatch(login(user.data));
        navigate('/');
      } catch (e) {
        if (e instanceof Error) {
          return e.message;
        }
      }
    } else {
      if (password === repeatPassword) {
        try {
          const newUser = await instance.post('auth/register', {
            name,
            userName,
            email,
            password,
          });
          await dispatch(login(newUser.data));
          navigate('/');
        } catch (error) {
          if (error instanceof Error) {
            console.log(error);
            return error;
          }
        }
      } else {
        throw new Error(AppError.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              setEmail={setEmail}
              setName={setName}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setUserName={setUserName}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
