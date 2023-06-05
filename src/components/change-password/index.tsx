import { Box, Grid, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { updateUserPassword } from '../../store/thunks/auth';
import { useAppDispatch } from '../../utils/hooks';
import AppLoadingButton from '../loading-button';
import { useStyles } from './styles';

const ChangePasswordComponent: FC = (): JSX.Element => {
	const [newPassword, setNewPassword] = useState<string>('');
	const [oldPassword, setOldPassword] = useState<string>('');
	const classes = useStyles();
	const dispatch = useAppDispatch();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const data = {
			oldPassword,
			newPassword,
		};
		dispatch(updateUserPassword(data));
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
					value={oldPassword}
					onChange={e => setOldPassword(e.target.value)}
					type='text'
					label='Старый пароль'
					variant='outlined'
				/>
				<TextField
					className={classes.inputField}
					value={newPassword}
					onChange={e => setNewPassword(e.target.value)}
					type='text'
					label='Новый пароль'
					variant='outlined'
				/>
				<Box className={classes.buttonSubmitForm}>
					<AppLoadingButton type='submit'>Изменить пароль</AppLoadingButton>
				</Box>
			</Box>
		</Grid>
	);
};

export default ChangePasswordComponent;
