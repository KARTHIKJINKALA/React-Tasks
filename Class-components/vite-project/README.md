# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Babel: Is transpiler which transpiles JSX code to js code or browser unserstandable code-this is there in the node modules 

Class Componenet:-

1.render method: render is the require method in the class comonents to insert the jsx in the dom 


State:- State is an object which holds the information or a data of a particular component
        State can make dynamic websites
        State is private to a component
  ////  State is mutable
        To access the state in the react class componenets we need the this key word

        There are two way to create the State in the class based componenets:-
        1.object way of creation
        2.constructor way of creating

     ///////   To change the state we must use the setState method-->Accepts the object
     ex :
     this.setState({})

     -->Whenever we are using the setState method ,component will re-render to show the updated layout
     -->State changes are asynchronous

        ex: Youtube button
        data:subscribe,subscribed
        initial state:subscribe
        Event:onClick
        final state:subscribed


        tO attach the method in the clas based components, we need to use this.methodName 
        onClick={this.methodname}





        CRUD-->
        C-  Create the data
        R-  Read the data
        U-  Update the data
        D-  Delete the data



-->If we want to pass the arguments to the methods we should take the extra function

ex:- onClick={()=>this.methodName(argument)}



-->If we want to change the stae of the class based defenatily we need to use the setState method