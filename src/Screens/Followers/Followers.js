import React from 'react'
import Following from '../../Components/Following'
import GetFollowers from "../../Components/Followers";

const Followers = () =>{


    return (<div>
        <h1>Following</h1>
        <Following/>
        <br/>
        <h1>Followers</h1>
        <GetFollowers/>
 </div>
    )
}

export default Followers;