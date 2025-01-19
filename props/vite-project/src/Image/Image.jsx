

export const Image=({src,alt,width,height})=>{
    // console.log(props)
    console.log(src,alt,height,width)
    
    return(
        <>
        <img src="https://images.pexels.com/photos/15613791/pexels-photo-15613791/free-photo-of-retro-camera-between-springtime-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         alt=""
         style={{
            height:"20vh",
            width:"30vw",
            border:"1px solid blue"
         }}
          />

<img src={src}
         alt={alt}
         style={{
            height:{height},
            width:{width},
            border:"1px solid blue"
         }}

/>
        </>
    )
}
