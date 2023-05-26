import {
  DarkMode,
  LightMode,
  MenuOutlined,
  NotificationsNone,
  Search,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { FC, useContext } from 'react';
import { ITopBar } from '../../common/types/top-bar';
import { ColorModeContext } from '../../theme';
import { useAppSelector } from '../../utils/hooks';
import FlexBetween from '../flex-between';
import { useStyles } from './styles';

const TopBarComponent: FC<ITopBar> = ({
  isOpen,
  setIsOpen,
}: ITopBar): JSX.Element => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();
  const user = useAppSelector((state) => state.auth.user);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlined
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          />
          <Typography variant="h3">Добро пожаловать! Kill-Rill</Typography>
        </FlexBetween>
        <Box display="flex">
          <Grid
            onClick={colorMode.toggleColorMode}
            className={classes.iconBlock}
          >
            <IconButton className={classes.themeIcon}>
              {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <IconButton>
              <NotificationsNone />
            </IconButton>
          </Grid>
          <Grid className={classes.searchBlock}>
            <IconButton className={classes.searchIcon}>
              <Search />
            </IconButton>
            <InputBase className={classes.searchInput} placeholder="Поиск" />
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBarComponent;
