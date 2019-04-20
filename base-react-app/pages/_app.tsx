import App, {Container} from 'next/app';
import React from 'react';
import {Header, Footer} from '../components/Layout';

import Grid from '@material-ui/core/Grid';

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props;
    
    return <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
            <Container>
              <Component {...pageProps} />
            </Container>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>  
      </Grid>
    </React.Fragment>
  }
}