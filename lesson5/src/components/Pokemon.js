import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const Pokemon = (props) => {
  return (
    <Grid item lg={4}>
      <Paper elevation={6}>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
          height={300}
          width={300}
          alt={props.name}
        />
        <Typography variant="h4">
          {props.name[0].toUpperCase() +
            props.name.substring(1, props.name.length)}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Pokemon;
