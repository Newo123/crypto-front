import { ChevronLeftOutlined, LogoutOutlined } from '@mui/icons-material';
import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/sidebar/logo.svg';
import { ISidebar } from '../../common/types/sidebar';
import FlexBetween from '../flex-between';
import SearchBarComponent from '../search-bar';
import ThemeSwitcherComponent from '../theme-switcher';
import { NavBarComponent } from './navbar';
import { useStyles } from './styles';

const SidebarComponent: FC<ISidebar> = ({
	isNonMobile,
	isOpen,
	setIsOpen,
	drawerWidth,
}: ISidebar): JSX.Element => {
	const [active, setActive] = useState<string>('');
	const classes = useStyles();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const theme = useTheme();

	useEffect(() => {
		setActive(pathname);
	}, [pathname]);

	const handleLogout = () => {
		sessionStorage.removeItem('name');
		sessionStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<Box component='nav'>
			{isOpen && (
				<Drawer
					anchor='left'
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant='persistent'
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: theme.palette.secondary.main,
							backgroundColor: theme.palette.primary.main,
							boxSizing: 'border-box !important',
							width: '250px',
						},
					}}
				>
					<Box className={classes.navBlock}>
						<Box>
							<FlexBetween>
								<Box className={classes.brand} onClick={() => navigate('/')}>
									<img src={Logo} alt='Logo' />
									<Typography variant='h1' className={classes.brandTitle}>
										Demo
									</Typography>
								</Box>
								{!isNonMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlined />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List className={classes.navList}>
							<List>
								{!isNonMobile && (
									<ListItem>
										<SearchBarComponent />
									</ListItem>
								)}
							</List>
							<NavBarComponent active={active} />
						</List>
					</Box>
					<Box width='100%'>
						<List>
							{!isNonMobile && (
								<ListItem>
									<Box padding='5px'>
										<ThemeSwitcherComponent />
									</Box>
								</ListItem>
							)}
							<ListItem>
								<ListItemButton
									onClick={handleLogout}
									className={classes.navItem}
								>
									<ListItemIcon>
										<LogoutOutlined className={classes.icons} />
									</ListItemIcon>
									<ListItemText>
										<Typography>Выход</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
};

export default SidebarComponent;
