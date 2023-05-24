import { Button, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsRegisterPage } from '../../../common/types/auth';
import styles from './style.module.scss';

const RegisterPage: FC<IPropsRegisterPage> = ({
  setEmail,
  setName,
  setPassword,
  setUserName,
  setRepeatPassword,
  navigate,
}: IPropsRegisterPage): JSX.Element => {
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Регистрация
      </Typography>

      <Typography variant="body1" textAlign="center" marginBottom={2}>
        Введите ваши данные
      </Typography>

      <TextField
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="UserName"
        variant="outlined"
        placeholder="Введите ваш UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        type="password"
        onChange={(e) => setRepeatPassword(e.target.value)}
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
        Зарегистрироваться
      </Button>

      <Typography variant="body1">
        У вас есть аккаунта?{' '}
        <span
          onClick={() => navigate('/login')}
          className={styles.incitingText}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
