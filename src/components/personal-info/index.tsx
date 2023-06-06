import { Box, Grid, TextField } from '@mui/material';
import { FC, SyntheticEvent, useEffect, useState } from 'react';
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import AppLoadingButton from '../loading-button';
import { useStyles } from './styles';

const PersonalInfoComponent: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const { user } = useAppSelector(state => state.auth.user);
	const classes = useStyles();

	useEffect(() => {
		if (user) {
			setName(user.name);
			setUserName(user.userName);
			setEmail(user.email);
		}
	}, [user]);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const data = {
			name,
			userName,
			email,
		};
		dispatch(updateUserInfo(data));
		dispatch(getPublicUser());
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
