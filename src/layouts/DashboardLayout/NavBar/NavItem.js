import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    padding: '8px 16px'
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '8px 16px',
    textTransform: 'none',
    width: '100%'
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  p0: {
    padding: '0',
  },
  m0: {
    margin: '0',
  },
  itemIcon: {
    width: '34px',
    display: 'flex',
    minWidth: '34px',
    marginRight: '16px',
    justifyContent: 'center',
  },
  itemText: {
    whiteSpace: 'nowrap',
    letterSpacing: '0.115px',
    fontSize: '0.94rem',
    lineHeight: '1.5',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#000000 !important',
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <ListItemIcon className={classes.itemIcon}>
        {Icon && (
          <Icon
            className={classes.icon}
          />
        )}
      </ListItemIcon>
      <span className={clsx(classes.m0, classes.itemText)}>
        {title}
      </span>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
