import { Grid, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent, useEffect, useState } from 'react';
import ChangePasswordComponent from '../../components/change-password';
import DeleteUserComponent from '../../components/delete-user';
import PersonalInfoComponent from '../../components/personal-info';
import TabPanel from '../../components/tab-panel';
import { getPublicUser } from '../../store/thunks/auth';
import { tokens } from '../../theme';
import { tabProps } from '../../utils/helpers';
import { useAppDispatch } from '../../utils/hooks';
import { useStyles } from './styles';

const SettingsPage = () => {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const classes = useStyles();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPublicUser());
	}, [dispatch]);

	const handleChange = (e: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Grid className={classes.root}>
			<Box className={classes.tabsWrapper}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='Settings tabs'
					centered
					textColor='secondary'
					TabIndicatorProps={{ style: { backgroundColor: colors.blue } }}
				>
					<Tab label='Персональные данные' {...tabProps(0)} />
					<Tab label='Изменить пароль' {...tabProps(1)} />
					<Tab label='Удалить аккаунт' {...tabProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<PersonalInfoComponent />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ChangePasswordComponent />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<DeleteUserComponent />
			</TabPanel>
		</Grid>
	);
};

export default SettingsPage;
