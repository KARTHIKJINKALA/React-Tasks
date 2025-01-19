import { Img } from "../Image/Image"

 export const Rendering=()=>{
    var login=true

    if(login){
        return(
            <>
            <h1>Login succesful</h1>
            <Img/>
            </>
        )
    }
    else{
        return(
            <>
            <h1>please login</h1>
            </>
        )
    }
}