import * as apiActions from '../../api/actions';


export const getPosts = () => {
    return async dispatch => {
        try {
            const result = await apiActions.DashBoardApi()
            dispatch({ type: 'SET_POSTS', data: result })
        } catch (error) {
            console.log(error);  
        }
    }
}

export const getFollowing = () => {
    return async dispatch => {
        try {
            const result = await apiActions.GetFollowers()
            
            dispatch({ type: 'SET_FOLLOWING', data: result })
        } catch (error) {
            console.log(error);  
        }
    }
}
export const getFollowers = () => {
    return async dispatch => {
        try {
            const result = await apiActions.GetAllFans()
            
            dispatch({ type: 'SET_FOLLOWERS', data: result })
        } catch (error) {
            console.log(error);  
        }
    }
}
