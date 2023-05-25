import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsLoginPage } from '../../../common/types/auth';
import styles from './style.module.scss';

const LoginPage: FC<IPropsLoginPage> = ({
  navigate,
  register,
  errors,
}: IPropsLoginPage): JSX.Element => {
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
        {...register('email', {
          required: 'Это обязательное поле',
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        helperText={errors.email ? `${errors.email.message}` : ''}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        type="password"
        {...register('password', {
          required: 'Это обязательное поле',
          minLength: 6,
        })}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <Button
        sx={{
          marginTop: 2,
          marginBottom: 2,
          width: '70%',
        }}
        variant="contained"
        type="submit"
      >
        Войти
      </Button>

      <Typography variant="body1">
        У вас нет аккаунта?{' '}
        <span
          onClick={() => navigate('/register')}
          className={styles.incitingText}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
