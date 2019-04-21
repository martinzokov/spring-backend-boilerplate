import Link from "next/link";
import React from "react";
import * as style from "./Header.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AssignmentIcon from "@material-ui/icons/Assignment";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "./MenuItems";

import {
  Grid,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Typography,
  Hidden,
  Drawer,
  IconButton,
  SwipeableDrawer
} from "@material-ui/core";

const MenuItems = [new MenuItem("Home", "/"), new MenuItem("About", "/about")];

export class Header extends React.Component<any, any> {
  state = {
    drawerOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(current => ({ ...current, drawerOpen: !current.drawerOpen }));
  };

  buildHeaderLinks = () => {
    return MenuItems.map(item => (
      <Button disableRipple>
        <Link href={item.path}>
          <div>{item.label}</div>
        </Link>
      </Button>
    ));
  };

  buildDrawerLinks = () => {
    return MenuItems.map(item => (
      <div onClick={this.handleDrawerToggle}>
        <Button disableRipple>
          <Link href={item.path}>
            <div>{item.label}</div>
          </Link>
        </Button>
      </div>
    ));
  };

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Grid container spacing={24} direction="row" justify="center">
            <Grid item xs={10} md={6} lg={3}>
              <Grid container spacing={8} alignItems="center">
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

            <Grid item xs={2} md={6} lg={3}>
              <Hidden smDown>
                <Grid container alignItems="center" justify="flex-end">
                  <Grid item>{this.buildHeaderLinks()}</Grid>
                  <Grid item>
                    <Avatar>
                      <PermIdentityIcon />
                    </Avatar>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid item>
                  <IconButton onClick={this.handleDrawerToggle}>
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <SwipeableDrawer
                  anchor="right"
                  open={this.state.drawerOpen}
                  onClose={this.handleDrawerToggle}
                  onOpen={this.handleDrawerToggle}
                >
                  {this.buildDrawerLinks()}
                </SwipeableDrawer>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
