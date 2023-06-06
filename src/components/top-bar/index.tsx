import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { ITopBar } from '../../common/types/top-bar';
import { useAppSelector } from '../../utils/hooks';
import FlexBetween from '../flex-between';
import SearchBarComponent from '../search-bar';
import ThemeSwitcherComponent from '../theme-switcher';
import { useStyles } from './styles';

const TopBarComponent: FC<ITopBar> = ({
	isOpen,
	setIsOpen,
	isNonMobile,
}: ITopBar): JSX.Element => {
	const classes = useStyles();
	const { user } = useAppSelector(state => state.auth.user);

	return (
		<AppBar className={classes.root} position='static'>
			<Toolbar className={classes.toolbar}>
				<Grid container justifyContent='space-between' alignItems='center'>
					<Grid item sm={3} lg={3}>
						<FlexBetween>
							<MenuOutlined
								className={classes.menuIcon}
								onClick={() => setIsOpen(!isOpen)}
							/>
							<Typography whiteSpace='nowrap' fontWeight={600} variant='h3'>
								Добро пожаловать, {user ? `${user.name}` : ' '}
							</Typography>
						</FlexBetween>
					</Grid>
					{isNonMobile && (
						<Grid display='flex' justifyContent='flex-end' item sm={9} lg={9}>
							<ThemeSwitcherComponent />
							<SearchBarComponent />
						</Grid>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default TopBarComponent;
