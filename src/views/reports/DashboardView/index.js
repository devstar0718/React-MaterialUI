import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Typography,
  FormControlLabel,
  Checkbox,
  InputBase,
  MenuItem,
  Select,
} from '@material-ui/core';
import Page from 'src/components/Page';
import {
  Search as SearchIcon,
} from 'react-feather';
import { withStyles } from '@material-ui/styles';
import { DataGrid } from '@material-ui/data-grid';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
    minWidth: 300,
    filterable: false,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: false,
    filterable: false,
    width: 150,
  },
  {
    field: 'creator',
    headerName: 'Creator',
    sortable: false,
    filterable: false,
    width: 150,
  },
  {
    field: 'created',
    headerName: 'Created',
    sortable: false,
    filterable: false,
    width: 150,
  },
  {
    field: 'language',
    headerName: 'Language',
    sortable: false,
    filterable: false,
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    title: '[Example Pad] Test Interview - Software Engineer',
    status: 'Not Started',
    creator: 'Boris Nikolaev',
    created: 'about 5 hours ago',
    language: 'java'
  },
  {
    id: 2,
    title: '[Example Pad] Test Interview - Software Engineer',
    status: 'Not Started',
    creator: 'Boris Nikolaev',
    created: 'about 5 hours ago',
    language: 'java'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingRight: '72px',
    paddingTop: '24px'
  },
  labelSmall: {
    fontSize: 14
  },
  p24: {
    padding: '0 24px',
  },
  pb: {
    paddingBottom: '16px',
  },
  padBtn: {
    height: '42px',
    minWidth: '121.66px',
    maxWidth: '121.66px',
    padding: '8px 22px',
    lineHeight: '1.5',
    letterSpacing: '0.42px',
    background: '#2D72CC',
    fontSize: '15px',
    fontWeight: '400',
  },
  headerText: {
    marginTop: '12px',
    fontWeight: '400',
    lineHeight: '1.75',
    letterSpacing: '0.00938em',
    fontSize: '1rem',
  },
  boxWidth: {
    width: '165px',
    height: '37.63px',
  },
  filterBox: {
    padding: '10.5px 32px 10.5px'
  },
  checkBox: {
    width: '100%',
  },
  select: {
    '& .MuiSelect-selectMenu': {
      fontSize: '14px !important',
      padding: '6.64px 32px 9px 14px !important',
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false} className={classes.p24}>
        <Grid
          container
        >
          <Grid
            item
            xs={12}
            className={classes.pb}
          >
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Box paddingRight={2}>
                <Typography
                  color="textPrimary"
                  variant="h3"
                >
                  Team Pads
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  className={classes.headerText}
                >
                  Your organization&apos;s pads appear below. You can search by pad creator or
                  title, and filter by pad format, status or when a pad was created.
                </Typography>
              </Box>
              <Button variant="contained" color="primary" className={classes.padBtn} style={{ textTransform: 'initial' }}>Create Pad</Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Box flexGrow={1}>
                <FormControl fullWidth className={classes.margin} style={{ backgroundColor: 'white' }} variant="outlined" size="small">
                  <OutlinedInput
                    style={{ height: '37px', fontSize: '14px' }}
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    inputProps={{
                      placeholder: 'Search pad title or creator',
                      style: { backgroundColor: 'white' }
                    }}
                    startAdornment={<InputAdornment position="start"><SearchIcon size={24} /></InputAdornment>}
                  // labelWidth={60}
                  />
                </FormControl>
              </Box>
              <Box width="17%" style={{ marginLeft: '13px', marginRight: '-11.4px', width: '178.64px' }}>
                <FormControlLabel classes={{ label: classes.labelSmall }} className={classes.checkBox} control={<Checkbox name="checkbox" />} label="Only search my pads" />
              </Box>
              <Box width="15%" ml={1.5} className={classes.boxWidth}>
                <FormControl className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
                    className={classes.select}
                  >
                    <MenuItem value={10}>Any format</MenuItem>
                    <MenuItem value={20}>Take-Home</MenuItem>
                    <MenuItem value={30}>Live</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box width="15%" ml={1.5} className={classes.boxWidth}>
                <FormControl className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
                    className={classes.select}
                  >
                    <MenuItem value={10}>Any status</MenuItem>
                    <MenuItem value={20}>Not started</MenuItem>
                    <MenuItem value={30}>Opened</MenuItem>
                    <MenuItem value={40}>Started</MenuItem>
                    <MenuItem value={50}>Ended / Reviewed</MenuItem>
                    <MenuItem value={60}>Ready for Review</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box width="15%" ml={1.5} className={classes.boxWidth}>
                <FormControl variant="filled" size="small" className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
                    inputProps={{
                      style: { margin: 0 }
                    }}
                    className={classes.select}
                  >
                    <MenuItem value={10}>Created anytime</MenuItem>
                    <MenuItem value={20}>Last day</MenuItem>
                    <MenuItem value={30}>Last 7 days</MenuItem>
                    <MenuItem value={40}>Last 30 days</MenuItem>
                    <MenuItem value={50}>Last 90 days</MenuItem>
                    <MenuItem value={60}>Last 180 days</MenuItem>
                    <MenuItem value={70}>Last 365 days</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ marginTop: '10px' }}
          >
            <div style={{ backgroundColor: 'white' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                pageSize={5}
              // disableSelectionOnClick
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
