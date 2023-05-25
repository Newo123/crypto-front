import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import { FC, useContext } from 'react';
import { ColorModeContext } from '../../theme';
import { useAppSelector } from '../../utils/hooks';
import { useStyles } from './styles';

const TopBarComponent: FC = (): JSX.Element => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Grid>Welcome Alex</Grid>
      <Box display="flex">
        <Grid onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
          <IconButton className={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder="Поиск" />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBarComponent;
