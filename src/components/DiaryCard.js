import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        width: 300,
        backgroundColor: 'skyblue',
        borderRadius: 10
    },
    subtitle: {
        marginBottom: 12,
    },
});

function DiaryCard({title, subtitle, description}) {
    const [isShowMore, setShowMore] = useState(false);
    const classes = useStyles();

    function buttonHandler() {
        setShowMore(!isShowMore);
    }

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    {subtitle}
                </Typography>
                <Typography variant="p">
                    {description.length > 100 && !isShowMore ? description.substring(0, 99) + ' ...' : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={buttonHandler}
                >
                    {isShowMore ? 'SHOW LESS' : 'SHOW MORE'}
                </Button>
            </CardActions>
        </Card>
    );
}

export default DiaryCard;
