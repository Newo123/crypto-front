import { TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { IPropsRegisterPage } from '../../../common/types/auth';
import AppLoadingButton from '../../../components/loading-button';
import { useStyles } from './styles';

const RegisterPage: FC<IPropsRegisterPage> = ({
  navigate,
  register,
  errors,
  loading,
}: IPropsRegisterPage): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" textAlign="center">
        Регистрация
      </Typography>

      <Typography variant="body1" textAlign="center" marginBottom={2}>
        Введите ваши данные
      </Typography>

      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        helperText={errors.name ? `${errors.name.message}` : ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.username}
        fullWidth={true}
        margin="normal"
        label="Никнейм"
        variant="outlined"
        placeholder="Введите ваш Никнейм"
        helperText={errors.username ? `${errors.username.message}` : ''}
        {...register('username')}
      />
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        label="Пароль"
        variant="outlined"
        placeholder="Введите ваш пароль"
        type="password"
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <TextField
        error={!!errors.confirmPassword}
        fullWidth={true}
        margin="normal"
        label="Пароль еще раз"
        variant="outlined"
        placeholder="Повторите ваш пароль"
        type="password"
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
        }
        {...register('confirmPassword')}
      />
      <AppLoadingButton loading={loading} variant="contained" type="submit">
        Зарегистрироваться
      </AppLoadingButton>

      <Typography variant="body1">
        У вас есть аккаунта?{' '}
        <span
          onClick={() => navigate('/login')}
          className={classes.incitingText}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
