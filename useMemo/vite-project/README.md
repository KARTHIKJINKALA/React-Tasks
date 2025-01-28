useMemo:-

problem statement:- we have a table,either we are doing or sorting,like if i change one state value component or any other state values gets triggered or not?

ans:- get users api call-- you making a response -->The response will be of 10000 || 10000 || 100000 values, optimization-->Performance of your react application

1.useState()-manage state ,re-render every time when the state is changed
2.useEffect()- To perform the side efects,-->it is rendered after the component is rendering
3.useMemo()- It is triggered during the the rendering only

const value= useMemo(()=>,[])  -->useMemo returns the value and we need to store that


-->Incase we are working with large data set or more number of api calls, we use the useMemo