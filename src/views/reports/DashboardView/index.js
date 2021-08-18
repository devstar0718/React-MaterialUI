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
  IconButton
} from '@material-ui/core';
import Page from 'src/components/Page';
import {
  Search as SearchIcon,
  MoreVertical as MoreVerticalIcon
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
  {
    field: 'id',
    headerName: ' ',
    sortable: false,
    filterable: false,
    width: 150,
    renderCell: () => (
      <strong>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
            textTransform: 'initial',
            minWidth: 80
          }}
        >
          View
        </Button>
        <IconButton>
          <MoreVerticalIcon size={16} />
        </IconButton>
      </strong>
    ),
  }
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
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  labelSmall: {
    fontSize: 14
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            xs={11}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h3"
                >
                  Team Pads
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Your organization&apos;s pads appear below. You can search by pad creator or
                  title, and filter by pad format, status or when a pad was created.
                </Typography>
              </Box>
              <Button variant="contained" color="primary" style={{ textTransform: 'initial', minWidth: 120 }}>Create Pad</Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={11}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Box flexGrow={1}>
                <FormControl fullWidth className={classes.margin} style={{ backgroundColor: 'white' }} variant="outlined" size="small">
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    inputProps={{
                      placeholder: 'Search pad title or creator',
                      style: { backgroundColor: 'white' }
                    }}
                    startAdornment={<InputAdornment position="start"><SearchIcon size={15} /></InputAdornment>}
                  // labelWidth={60}
                  />
                </FormControl>
              </Box>
              <Box width="17%" ml={2}>
                <FormControlLabel classes={{ label: classes.labelSmall }} control={<Checkbox name="checkbox" />} label="Only search my pads" />
              </Box>
              <Box width="15%" ml={2}>
                <FormControl className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
                  >
                    <MenuItem value={10}>Any format</MenuItem>
                    <MenuItem value={20}>Take-Home</MenuItem>
                    <MenuItem value={30}>Live</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box width="15%" ml={2}>
                <FormControl className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
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
              <Box width="15%" ml={2}>
                <FormControl className={classes.margin} style={{ width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={10}
                    input={<BootstrapInput />}
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
            xs={11}
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
