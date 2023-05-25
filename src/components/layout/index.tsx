import { Box, useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ILayout } from '../../common/types/layout';
import SidebarComponent from '../sidebar';
import TopBarComponent from '../top-bar';
import { useStyles } from './style';

const LayoutComponent: FC<ILayout> = ({ children }: ILayout): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const classes = useStyles();

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>{children}</>
  ) : (
    <Box
      display={isNonMobile ? 'flex' : 'block'}
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      <SidebarComponent
        isNonMobile={isNonMobile}
        drawerWidth="300px"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Box className={classes.mainSection}>
        <TopBarComponent />
        {children}
      </Box>
    </Box>
  );
};

export default LayoutComponent;
