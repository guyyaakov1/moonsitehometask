
import React from 'react'
import { AddFollower } from '../api/actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { DeletePost } from '../api/actions'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const GetAllPosts = (props) => {

  const classes = useStyles();



  const follow = async () => {
    try {
      const result = await AddFollower({ f_user_id: props.post.user_id });
      console.log(result);

    } catch (error) {
      console.log(error);
    }
  }
  const deletepost = async () => {
    try {
      const result = await DeletePost(props.post.post_id);
      console.log(result);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Grid item key={props.post.post_id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.post.image_url}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.post.title}
          </Typography>
          <Typography>
            {props.post.title}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup size="small" aria-label="small outlined button group">
            {
              props.post.is_my_post === false &&
              <Button onClick={follow}>follow</Button>
            }
            {
              props.post.is_my_post === true &&
              <Button onClick={deletepost}>Delete</Button>
            }

          </ButtonGroup>
          {/* <Button size="small" color="primary">
            View
                    </Button>
          <Button size="small" color="primary">
            Edit
                    </Button> */}
        </CardActions>
      </Card>
    </Grid>
  );

}

export default GetAllPosts
