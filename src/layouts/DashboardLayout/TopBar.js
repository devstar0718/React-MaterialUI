import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  makeStyles,
  Button,
  Typography
} from '@material-ui/core';
import { ChevronDown as ChevronDownIcon } from 'react-feather';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  },
  button: {
    textTransform: 'initial',
    marginLeft: '16px',
    letterSpacing: '0.41px',
    fontWeight: '400',
  },
  upgradeBar: {
    backgroundColor: '#353C4E',
    color: theme.palette.common.white,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
    zIndex: '100000',
  },
  headerText: {
    margin: '10px 0',
    fontSize: '0.98rem',
    fontFamily: "Roboto, 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Arial, Helvetica, sans-serif",
    lineHeight: '1.5',
    fontWeight: 'normal',
    letterSpacing: '0.13px'
  },
  headerBox: {
    height: '73px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  hearderPadding: {
    padding: '0 24px',
    width: '100%'
  },
  headerContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex'
  },
  logo: {
    alignSelf: 'center',
    display: 'flex',
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Box className={classes.headerBox}>
        <Box className={classes.hearderPadding}>
          <Box className={classes.headerContent}>
            <RouterLink to="/">
              <Logo className={classes.logo} />
            </RouterLink>
            <Box flexGrow={1} />
            {/* <Hidden mdDown> */}
            {/* <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
            <Button color="inherit" style={{ textTransform: 'initial', padding: '4px 0' }}>
              Hello, Boris
              <ChevronDownIcon size={16} />
            </Button>
            {/* </Hidden> */}
            {/* <Hidden lgUp>
              <IconButton color="inherit" onClick={onMobileNavOpen}>
                <MenuIcon />
              </IconButton>
            </Hidden> */}
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.upgradeBar}
      >
        <Typography variant="caption" className={classes.headerText}>
          You have 7 days left on your trial.
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
        </Typography>
      </Box>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
