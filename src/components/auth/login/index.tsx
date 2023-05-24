import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsLoginPage } from '../../../common/types/auth';
import styles from './style.module.scss';

const LoginPage: FC<IPropsLoginPage> = ({
  setPassword,
  setEmail,
  navigate,
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
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Введите ваш пароль"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
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
