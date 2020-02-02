import React from 'react'
import clsx from 'clsx'

import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import {
  Link
} from "react-router-dom"

import { useStyles } from "./header.styles";

export default function Header(props) {

    const { link, link2 } = props 

    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          // {/*position="fixed"*/}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <ChevronRightIcon style={{ color: "#212121" }} />
            </IconButton>

            <Typography>
              <img
                className={classes.nasaLogoImage}
                src="/nasologo.png"
                alt="nasa logo"
              />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: "#212121" }} />
              ) : (
                <ChevronRightIcon style={{ color: "#212121" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              "+ Mars Rover Images",
              "+ Insight: Mars weather service",
              "+ APOD: Astronomy picture of the day",
              "+ Earth: Earth observation data",
              "+ Asteroids - NeoWs: Near earth objects",
              "+ EPIC: Earth Polychromatic Imaging Camera"
            ].map((text, index) => (
              <Link key={index} to={`/${link}`}>
                <ListItem button key={text}>
                  <ListItemText primary={text} style={{ color: "#212121" }} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
}


