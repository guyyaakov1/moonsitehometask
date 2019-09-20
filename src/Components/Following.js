import React,{useEffect} from 'react'
import * as actions from "../Store/Actions/Actions";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

const Following = (props) => {

    const classes = useStyles();
  
    useEffect(() => {
        props.getFollowing()
        
    },[])


    return (<div>
        {
            props.following.map(x=>{
               return( 
            //    <h1 key={x.f_user_id}>{x.email}</h1>
           
                     <Card className={classes.card} key={x.f_user_id}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         user id: {x.f_user_id}
        </Typography>
        <Typography variant="h5" component="h2">
          {x.email}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" onClick={Logout.logOut }>Unfollow</Button>
      </CardActions> */}
    </Card>
               )
            })
        }
    </div>)
}
const mapStateToProps = state => {
    return {
        following: state.following,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getFollowing: () => dispatch(actions.getFollowing()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Following)
