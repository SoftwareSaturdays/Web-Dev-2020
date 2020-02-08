import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

export class App extends Component {
  render() {
    return (
      <Grid justify="center" container spacing={5}>
      <Grid item md={12}>
        <Grid container spacing={5}>
          <Grid item md={12}>
            <Paper elevation={6}>Search...</Paper>
          </Grid>
          <Grid item md={8}>
            <Paper elevation={6} style={{ height: '80%' }}>
              Video
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
              Description
            </Paper>
          </Grid>
          <Grid
            container
            item
            xs={4}
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Paper elevation={6} style={{ padding: '30px' }}>
              <div>Image</div>
            </Paper>
            <Paper elevation={6} style={{ padding: '30px' }}>
              <div>Image</div>
            </Paper>
            <Paper elevation={6} style={{ padding: '30px' }}>
              <div>Image</div>
            </Paper>
            <Paper elevation={6} style={{ padding: '30px' }}>
              <div>Image</div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
  }
}

export default App;
