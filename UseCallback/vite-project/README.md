useCallback:- useCallback is a React Hook 
useCallback(function,deps);
it returns the cachedFunction
-->To memoize functions and ensure that same function is recreated when that particular state updates
useCallback(()=>,[])

when to use useCallback():-
1.When you have a function that is being passed as an prop to a child component
2.When you hava a function that is being passed as an callback to a parent component
3.When you hava an fucntion that is being used in a useEffect Hook