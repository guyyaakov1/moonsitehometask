import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../Store/Actions/Actions";
import GetAllPosts from '../../Components/GetAllPosts';
import Grid from '@material-ui/core/Grid';




const Dashboard = (props) => {

    useEffect(() => {
        props.getPosts();
    }, [])




    return (
        <div>
            <Grid container spacing={4}>
                {props.posts.map(post => {
                    return <GetAllPosts post={post} />
                })
                }
            </Grid>



        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(actions.getPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)




