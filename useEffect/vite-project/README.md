
useEffect:-

useEffect is the hook in the react functional components ,It csuuses the side effects in the the components

side effects:-Data fecthing,Dom manipulation,Timers,Event listeners

useEffect is the replica of 3 methods
1.componentDidmount
2.compoenentDidUpdate
3.componentWillUnmount

syntax:- useEffect will accept 2 arguments
1.callback function
2.array(dependency array)

useEffect(()=>{
    //sise effects triggering
},[])

Note:Based on the dependency array,behaviour of the useEffect will changes

case1:Empty dependencyv array-componentDidMount
useEffect(()=>{
    //side effects triggering
},[])

case2:-Array with some values or variables-componentDidUpdate
useEffect(()=>{
    //side effects triggering
},[variable1,variable2,variable3,...])

note:-When variables changes useEffect change will be trigger

case3:Removes Dependency array
useEffect(()=>{})
when dependency array removed component will gets re-render every-time when state or props changes,it can also leads to infinite render

case4:callback function return another function -componentWillUnMount

useEffect(()=>{
    //side effects
    
    return ()=>{
    //clean up tasks
    //prevents the memory leakages
    }
},[])


