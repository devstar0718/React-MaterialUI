import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  IconButton
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Star as StarIcon,
  Menu as MenuIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  name: 'Katarina Smith',
  team: "Team"
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Pads List'
  },
  {
    href: '/app/customers',
    icon: UsersIcon,
    title: 'Question Bank'
  },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Files'
  },
  {
    href: '/app/account',
    icon: DatabaseIcon,
    title: 'Databases'
  },
  {
    href: '/app/settings',
    icon: UsersIcon,
    title: 'Members'
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
    backgroundColor: "#E2E6EA",
  },
  desktopDrawer: {
    width: 256,
    top: 128,
    height: 'calc(100% - 128px)',
    backgroundColor: "#E2E6EA",
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  button: {
    width: "95%",
    textTransform: "initial"
  },
  team: {
    padding: "26px 16px 0 20px"
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        className={classes.team}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.team}
        </Typography>
        <IconButton>
          <MenuIcon size={16} />
        </IconButton>
      </Box>
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
      >
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="secondary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
            className={classes.button}
          >
            Upgrade &nbsp;&nbsp; <StarIcon size="16" />
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;