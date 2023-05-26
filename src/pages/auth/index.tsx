import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppError } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hooks';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import LoginPage from './login';
import RegisterPage from './register';
import { useStyles } from './styles';

const AuthRootComponent: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(
      location.pathname === '/login' ? LoginSchema : RegisterSchema,
    ),
  });

  const handleSubmitForm = async (data: any) => {
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
      if (data.password === data.confirmPassword) {
        try {
          const newUser = await instance.post('auth/register', {
            name: data.name,
            userName: data.username,
            email: data.email,
            password: data.password,
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
    <div className={classes.root}>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow="-3px -2px 20px 1px #202020"
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;
