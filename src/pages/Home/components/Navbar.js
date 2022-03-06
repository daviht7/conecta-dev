import { ListItem, ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight:16
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    { id: 1, name: 'react' },
    { id: 2, name: 'next' },
    { id: 3, name: 'node' },
    { id: 4, name: 'javascript' },
    { id: 5, name: 'java' },
    { id: 6, name: 'C#' },
]

function Navbar() {

    const classes = styles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>

            <ListSubheader>{'Tags em alta'}</ListSubheader>
            {
                tags.map(item => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} /> 
                    </ListItem>
                ))

            }
            <ListItem button>
                Exibir mais tags
            </ListItem>

        </Paper>
    )

}

export default Navbar;