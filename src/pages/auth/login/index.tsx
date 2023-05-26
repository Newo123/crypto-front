import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsLoginPage } from '../../../common/types/auth';
import AppLoadingButton from '../../../components/loading-button';
import { useStyles } from './styles';

const LoginPage: FC<IPropsLoginPage> = ({
  navigate,
  register,
  errors,
  loading,
}: IPropsLoginPage): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Авторизация
      </Typography>

      <Typography variant="body1" textAlign="center" marginBottom={2}>
        Введите ваш логин и пароль
      </Typography>

      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        {...register('email')}
        helperText={errors.email ? `${errors.email.message}` : ''}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите ваш пароль"
        type="password"
        {...register('password')}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <AppLoadingButton loading={loading} variant="contained" type="submit">
        Войти
      </AppLoadingButton>

      <Typography variant="body1">
        У вас нет аккаунта?{' '}
        <span
          onClick={() => navigate('/register')}
          className={classes.incitingText}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
