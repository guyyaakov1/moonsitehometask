const initialState = {
    posts: [],
    following: [],
    followers: []
}

const mainReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...newState,
                posts: action.data
            }
        case 'SET_FOLLOWING':
            return {
                ...newState,
                following: action.data
            }
        case 'SET_FOLLOWERS':
            return {
                ...newState,
                followers: action.data
            }    
        default:
            return newState;
    }
}

export default mainReducer