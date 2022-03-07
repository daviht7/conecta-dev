
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import MessageIcon from '@material-ui/icons/Message'



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
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto !important'
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
            <CardContent className={classes.content}>
                <Typography variant="body1" className={classes.message}> {post.hashtags}</Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image} />
                </CardActionArea>
            </CardContent>
            <CardActions disabledSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography style={{ cursor: 'pointer' }} color="textSecondary" variant="body2">{'10'}</Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon />
                    <Typography style={{ cursor: 'pointer' }} color="textSecondary" variant="body2">{'10'}</Typography>
                </IconButton>
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon />
                </IconButton>
            </CardActions>
        </Card>

    )

}

export default PostCard;