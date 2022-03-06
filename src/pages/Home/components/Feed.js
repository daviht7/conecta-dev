
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard';

const styles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Davi Holanda',
            username: 'daviht7',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um app do zero',
        date: "April 7, 2020",
        description: 'fala pessoal! qual é o frameworks de vcs?',
        hashtags: '#dotnet,#javascript,#reactjs,#developer',
        image: '/images/posts/post2.jpeg'
    }
]

function Feed() {

    const classes = styles();

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>

    )

}

export default Feed;