



var Button=(props)=>{
    const {text, bgColor,color,onPress}=props
    // or we can destructure the props
    console.log(props)
    return(
        <>

        <button   onClick={onPress}  style={{backgroundColor:bgColor ,color:color}}>{text} </button>

        </>
    )
}
export default Button;