import {
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../store/thunks/auth';
import { useAppDispatch } from '../../utils/hooks';
import { useStyles } from './styles';

const DeleteUserComponent: FC = (): JSX.Element => {
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleDelete = () => {
		dispatch(deleteUser());
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('user');
		navigate('/login');
	};

	return (
		<Grid className={classes.root} container>
			<Grid item className={classes.tabHeading}>
				<Typography variant='h2'>Удаление аккаунта</Typography>
			</Grid>
			<Grid item className={classes.alertMessage}>
				<Typography variant='body1'>
					Удаляя данный аккаунт, вы тем самым удаляете все данные. После
					удаления вся сохраненная вами информация будет недоступна.
				</Typography>
			</Grid>
			<Grid item className={classes.checkboxBlock}>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								checked={isChecked}
								onChange={() => setIsChecked(!isChecked)}
								className={classes.checkbox}
							/>
						}
						label='Я соглашаюсь'
					/>
				</FormGroup>
			</Grid>
			<Grid item className={classes.buttonBlock}>
				<Button
					disabled={!isChecked}
					variant='outlined'
					color='success'
					onClick={handleDelete}
				>
					Удалить аккаунт
				</Button>
			</Grid>
		</Grid>
	);
};

export default DeleteUserComponent;
