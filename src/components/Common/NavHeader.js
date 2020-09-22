import React from 'react';
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import headerImage from '../../../static/portfolio/headerIcon.png'
import './NavContent.scss';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/"><img alt="Tsue.com" className="headerIcon" src={headerImage} /></Link>
    </div>
  );
}
