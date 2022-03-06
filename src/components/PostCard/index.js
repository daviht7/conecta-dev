
import { Card, CardActions, CardContent, CardHeader, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subHeader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: theme.spacing(1)
    }
}));

function PostCard({ post }) {

    const classes = styles();

    return (

        <Card classes={classes.root}>
            <CardHeader avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant="h6"> {post.title} </Typography>}
                subheader={
                    <div className={classes.subHeader}>
                        <Typography variant="caption" className={classes.caption}> {'Avaliado por'} </Typography>
                        <Typography variant="subtitle2" className={classes.caption}> {post.author.name} </Typography>
                        <Typography variant="caption" className={classes.caption}> {post.date} </Typography>
                    </div>
                }
            ></CardHeader>
            <CardContent>
                <Typography variant="body1" className={classes.message}> {post.hashtags}</Typography>
            </CardContent>
            <CardActions></CardActions>
        </Card>

    )

}

export default PostCard;