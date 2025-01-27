import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


export const User = () => {

 const params=useParams()
 console.log(params)

  return (
<>
<h2>This is User {params.Username}</h2>
<h2>The password is {params.Password}</h2>


</>

  )
}
