import React, { useEffect } from 'react'
import Headerv1 from '../components/Headerv1'
import axios from 'axios'

const Profile = () => {
  // useEffect(()=>{
  //   axios.get('http://localhost:3001/')
  //   .then(res=>console.log(res.data))
  //   .catch(err=>console.log(err))
  // })
  return (
    <div>
      <Headerv1>Howdy ! [username]</Headerv1>
    </div>
  )
}

export default Profile