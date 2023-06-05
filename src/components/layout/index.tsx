import { Box, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SidebarComponent from '../sidebar';
import TopBarComponent from '../top-bar';
import { useStyles } from './style';

const LayoutComponent: FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width: 760px)');
	const classes = useStyles();

	return location.pathname === '/login' || location.pathname === '/register' ? (
		<>
			<Outlet />
		</>
	) : (
		<Box
			display={isNonMobile ? 'flex' : 'block'}
			justifyContent='space-between'
			width='100%'
			height='100%'
		>
			<SidebarComponent
				isNonMobile={isNonMobile}
				drawerWidth='250px'
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<Box className={classes.mainSection}>
				<TopBarComponent
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					isNonMobile={isNonMobile}
				/>
				<Outlet />
			</Box>
		</Box>
	);
};

export default LayoutComponent;
