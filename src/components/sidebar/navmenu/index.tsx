import {
  AutoGraphOutlined,
  HomeOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../styles';

export const NavBarComponent: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const classes = useStyles();

  const navMenu = [
    {
      id: 1,
      name: 'Главная',
      icon: <HomeOutlined className={classes.icons} />,
      path: '/',
    },
    {
      id: 2,
      name: 'Избранное',
      icon: <AutoGraphOutlined className={classes.icons} />,
      path: '/watchlist',
    },
    {
      id: 3,
      name: 'Новости',
      icon: <MenuBookOutlined className={classes.icons} />,
      path: '/news',
    },
    {
      id: 4,
      name: 'Настройки',
      icon: <SettingsOutlined className={classes.icons} />,
      path: '/settings',
    },
  ];

  return (
    <>
      {navMenu.map((el) => {
        return (
          <ListItem key={el.id}>
            <ListItemButton
              className={classes.navItem}
              onClick={() => navigate(`${el.path}`)}
            >
              <ListItemIcon>{el.icon}</ListItemIcon>
              <ListItemText>
                <Typography variant="body1">{el.name}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};
