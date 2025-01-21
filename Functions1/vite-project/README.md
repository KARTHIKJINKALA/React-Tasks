# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


why we need to prefer the functional components over the class components

1.Complexity will be more in the class components
2.Readability is less in the class components
3.Maintainance is more in the class componenets
4.Scalability takes much time in class componenets
5.Every code flow willl be splitted into the different parts in the components




Functional Componenets main feature-->Hooks
Hooks: Hooks in the react is introduced in the 16.8 version
Hooks let us use of state and other react features(life cycle methods) without using the class

Hooks are the reusable pre-defined functions provided by the react
Hooks will common problems like creation of state,managing the state,async actions

Rules of Hooks:
1.Hooks are only used in the functional components
2.Hooks must be used on top component and must import from react
3.Hooks cannot be used in the loops and conditions
4.Hooks cannot be used in the events


Hooks are provided by the react
Hooks Examples:
1.useState
2.useEffect
3.useRef
4.useReducer
5.useContext
6.useMemo
7.useCallback
8.customHooks

React-Router-Dom:
1.useNavigate
2.useParams



useState--->
useState is a hook which helps us to create the state and manage the state
It is the replica of state creation using constructor and setState methods

syntax:- 
1.useState will accept the initialState as an argument
intialState->any data type
initialState=0

useState(intialState)

2.useState will return an array which contains the two elements
  I.currentState
  II.updaterFunction: will update the currentState

  state changes are asynchronous

  destructuring the array

 final state--> const[currentState,updaterFunction]=useState(initialState)
 const rrepresents the immutability,we cannot change the state
 current-->currentState