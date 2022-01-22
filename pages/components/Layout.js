import React, { Children } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../../utills/style';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> Shop</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>SabalanCable</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. SabalanCable 2022</Typography>
      </footer>
    </div>
  );
}
