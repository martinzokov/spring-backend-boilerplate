import Link from "next/link";
import React from "react";
import * as style from "./Header.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography
} from "@material-ui/core";

export class Header extends React.Component<any, any> {
  state = {
    value: 0,
    menuDrawer: false
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Grid container spacing={24} direction="row" justify="center">
            <Grid item sm={3}>
              <Grid container>
                <Grid item>
                  <Avatar>
                    <AssignmentIcon />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6" inline>
                    My Amazing Boilerplate
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={3}>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button disableRipple>
                    <Link href="/">
                      <div>Home</div>
                    </Link>
                  </Button>
                  <Button disableRipple>
                    <Link href="/about">
                      <div>About</div>
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Avatar>
                    <PermIdentityIcon />
                  </Avatar>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
