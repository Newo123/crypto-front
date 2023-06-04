import { Box, Grid, TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { updateUserInfo } from '../../store/thunks/auth';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import AppLoadingButton from '../loading-button';
import { useStyles } from './styles';

const PersonalInfoComponent: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState('');
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const { user } = useAppSelector(state => state.auth.user);
	const classes = useStyles();

	useEffect(() => {
		if (user) {
			setName(user.name);
			setUserName(user.userName);
			setEmail(user.email);
		}
	}, [user]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			name: name,
			userName: userName,
			email: email,
		};
		dispatch(updateUserInfo(data));
	};

	return (
		<Grid
			component='form'
			noValidate
			autoComplete='off'
			className={classes.root}
			onSubmit={handleSubmit}
		>
			<Box className={classes.formWrapper}>
				<TextField
					className={classes.inputField}
					value={name}
					onChange={e => setName(e.target.value)}
					type='text'
					label='Имя'
					variant='outlined'
				/>
				<TextField
					className={classes.inputField}
					value={userName}
					onChange={e => setUserName(e.target.value)}
					type='text'
					label='Никнейм'
					variant='outlined'
				/>
				<TextField
					className={classes.inputField}
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='text'
					label='Email'
					variant='outlined'
				/>
				<Box className={classes.buttonBlock}>
					<AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default PersonalInfoComponent;
