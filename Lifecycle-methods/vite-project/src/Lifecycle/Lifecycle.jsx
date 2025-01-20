
import React,{Component} from "react"
import axios from 'axios';

export default class Lifecycle extends Component{

    // WE have the two ways to Define the state
    // 1.Direct by using the state
   

    // state={
    //     products:[],
    //     loading:false,
    //     error:null
    // }


     // 2.By using the constructor with the super 
     constructor(){
        super()
        this.state={
         products:[],
        loading:false,
        error:null

        }

     }
    


    componentDidMount(){
        this.fetchData()
        // we can do the dom manipulations using the componentDidMount
        // ex:-
        document.title="karthik"

    }
    
    fetchData=async()=>{

        this.setState({
            loading:true
        })

        try{

        var response=await axios.get("https://dummyjson.com/recipes")
        console.log(response.data.recipes)
        
        this.setState({
            products:response.data.recipes,
          
        })
        
    }catch(err){
        console.log(err)
        this.setState({
            error:"Server is busy"
        })
    }
    finally{
        this.setState({
            loading:false
        })
    }

    }

    render(){
        return(
            <>
            <h1>This is the lifecycle method</h1>

            <div className="products">
                {
                    this.state.loading?(<h1>Data is loading</h1>):
                    (this.state.products.map((values)=>{
                        return(
                           <React.Fragment key={values.id}>

                            <h3>{values.name}</h3>
                            <img src={values.image} alt=""  height={"60vh"} width={"60vw"}/>

                           </React.Fragment>
                        )
                    }))
                }
            </div>
            </>
        )
    }
}