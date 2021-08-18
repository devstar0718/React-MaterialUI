import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  ChevronDown as ChevronDownIcon
} from 'react-feather';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  button: {
    textTransform: 'initial'
  },
  upgradeBar: {
    backgroundColor: '#353C4E',
    color: theme.palette.common.white
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          {/* <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          <Button color="inherit" style={{ textTransform: 'initial' }}>
            Hello, Boris
            &nbsp;&nbsp;&nbsp;
            <ChevronDownIcon size={16} />
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Toolbar className={classes.upgradeBar}>
        <Box width="100%" display="flex" alignItems="center" justifyContent="center">
          <Typography variant="body2">You have 7 days left on your trial.</Typography>
          &nbsp;&nbsp;&nbsp;
          <Button
            color="secondary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
            className={classes.button}
            size="large"
          >
            Upgrade Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
