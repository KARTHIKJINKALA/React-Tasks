
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

Note:
