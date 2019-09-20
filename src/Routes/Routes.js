import React from 'react';
import {  Route } from "react-router-dom";
import Dashboard from '../Screens/Dashboard/Dashboard';
import AddPost from '../Screens/AddPost/AddPost';
import Followers from '../Screens/Followers/Followers';
import Register from '../Screens/Register/Register';
import TextFields from '../Screens/Login/Login';
import { ProtectedRoute } from '../Components/ProtectedRoutes';


export const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/login" component={TextFields} />
      <Route exact path="/register" component={Register} />
      <ProtectedRoute
        exact
        path="/"
        component={Dashboard}
      />
      <ProtectedRoute
        exact
        path="/followers"
        component={Followers}
      />
      <ProtectedRoute
        exact
        path="/addpost"
        component={AddPost}
      />
      {/* <ProtectedRoute
              exact
              path="/following"
              component={Following}
            /> */}
    </React.Fragment>
  )
}
