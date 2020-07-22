import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EcoIcon from '@material-ui/icons/Eco';
import styles from './styles.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  const [addedToFavourite, addToFavourite] = React.useState(true);

  let iconColor;

  const onClickHandler = () => {
    console.log(props.title);
    addToFavourite(!addedToFavourite)
  
    if (addedToFavourite) {
      console.log('added')
      localStorage.setItem('Favourite dish: ' + props.title, props.title);
     } else {
        console.log('removed')
        localStorage.removeItem('Favourite dish: ' + props.title, props.title);
      }

  };

  return (
    <Card className={classes.root} className={styles.singleCardMaterialUI}>
      <CardHeader
        action={
          <IconButton aria-label="eco">
            <EcoIcon />
          </IconButton>
        }
        title={props.title}
        // subheader={props.readyInMinutes}
      />
      <CardMedia
        className={classes.media}
        // className= {styles.photos}
        image={props.photoURL}
      />
      {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Przepis dla: {props.servings} osób <hr/>
          Czas przygotowania: {props.readyInMinutes} min <hr/>
          Cena: {props.price} zł

            
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={onClickHandler}/>
        </IconButton>

      </CardActions>
      
    </Card>
  );
}