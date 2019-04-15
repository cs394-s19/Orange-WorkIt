import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';

import Card from '@material-ui/core/Card';
import squats from '../../assets/squats.png';
import plank from '../../assets/plank.png';
import crunches from '../../assets/crunches.png';

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    card: {
        width: '100%',
        justify: "center"
    }
});
function populateRoutines(routines) {
    const img_lst = [squats, plank, crunches];
    return _.map(routines, (routine, index) => {
        return (
            <ListItem button key={index}>
                <Avatar src={img_lst[index]}></Avatar>
                <ListItemText primary={routine.name} secondary={"id: " + routine.id}/>
                <KeyboardArrowRight/>
            </ListItem>
        )
    });
}
function FolderList(props) {
    const {classes} = props;
    
    return (<Card className={classes.card}>
        <List className={classes.root}>
            {populateRoutines(props.routines)}
        </List>
    </Card>);
}

FolderList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);