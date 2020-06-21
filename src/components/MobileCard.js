import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom: 50,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    media: {
        height: 140,
    },
    btn: {
        background: 'rgba(172, 230, 255, 0.26)'
    }
});

function MobileCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.date}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {props.tags.map(tag => <Button className="tag-btn" variant="outlined" className={classes.btn}>{tag}</Button>)}
            </CardActions>
        </Card>
    );
}

export default MobileCard;