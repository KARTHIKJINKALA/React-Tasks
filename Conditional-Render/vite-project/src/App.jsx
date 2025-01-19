// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import { Img } from './Image/Image'
// import { Rendering } from './Conditional/Rendering'

function App() {
// const login=true

var iplTeams=[
  {
    teamname:"mi",
    captain:"rohit bhai",
    players:["bumrah,rohith,sky"],
    won:3
  },
  {
    teamname:"csk",
    captain:"ms dhoni",
    players:["gaikwad","watson","pathirana"],
    won:3
  },
  {
    teamname:"srh",
    captain:"bhuvi",
    players:["classon","washington sunder","nitishreddy"],
    won:1
  },
  {
    teamname:"rr",
    captain:"ashwin",
    players:["chahal","powel","bolt"],
    won:0
  }
]

  return (
    <>
    {/* <div>
      {
        iplTeams.map((value)=>{
          return(
            <>
            <h1>Teamname:{value.teamname}</h1>
            <h2>Captain:{value.captain}</h2>
            {
              // value.players.map((playing)=>{
              //   return(
              //     <>
              //     <p>{playing}</p>
              //     </>
              //   )
              // })
            
            }
            </>
          )
        })
      }
    </div> */}




    {/* {
      login?
      <>
      <h1>hello welcome</h1>
      <Img/>
      </>
      :<h1>plase login borther</h1>
    } */}

{/* 
    {
      login && 
      <>
            <h1>hello welcome</h1>
            <Img/>
      </>
    } */}

    {
      iplTeams.filter((data=>data.won>2)=>{
       return(
        <>
          <h1>{data}</h1>
          </>
       )
      })
    }
    
    </>
  )
}

export default App
