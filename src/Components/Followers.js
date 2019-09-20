import React,{useEffect} from 'react'
import * as actions from "../Store/Actions/Actions";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const GetFollowers = (props) => {

    const classes = useStyles();
  
    useEffect(() => {
        props.getFollowers()
        
    },[])


    return (<div>
        {
            props.followers.map(x=>{
               return( 
            //    <h1 key={x.f_user_id}>{x.email}</h1>
            <div>
                <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          
          {x.email}
          nev
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </div>
               )
            })
        }
    </div>)
}
const mapStateToProps = state => {
    return {
        followers: state.followers,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFollowers: () => dispatch(actions.getFollowers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetFollowers)
