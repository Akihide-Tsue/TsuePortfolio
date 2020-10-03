import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AssessmentSharpIcon from '@material-ui/icons/AssessmentSharp';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavContent() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    window.open('https://covid19chart-tsue.web.app', '_blank');
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Divider className="firstLine"/>

      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <ListAltSharpIcon />
        </ListItemIcon>
        <ListItemText primary="コンポーネント集" />
      </ListItem>

      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AssessmentSharpIcon />
          </ListItemIcon>
          <ListItemText primary="COVID 19 chart" />
        </ListItem>

      </List>
      <Divider />
    </div>
  );
}
