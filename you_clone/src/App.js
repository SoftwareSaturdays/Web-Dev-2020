import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export class App extends Component {
  render() {
    const styles = {
      justify: 'space-around'
    };
    return (
      <Grid justify="center" container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Paper elevation={6}>
                <Typography>SearchBar</Typography>
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper elevation={6}>
                <Typography>Video Detail</Typography>
              </Paper>
            </Grid>
            <Grid
              item
              xs={4}
              container
              direction="column"
              justify="space-around"
              alignItems="stretch"
            >
              <Paper elevation={6}>
                <Typography>Video List</Typography>
              </Paper>
              <Paper elevation={6}>
                <Typography>Video List</Typography>
              </Paper>
              <Paper elevation={6}>
                <Typography>Video List</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
