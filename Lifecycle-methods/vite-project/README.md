# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





/////////////////////////////////////////////////////////////////////////////////////////////////////
                      Lifecycle-Methods in the class components


Componenet Life cycle:-
1.Every component will goes to different stages through out its execution,those were represented using the component life cycles.
2.Component life cyle methods only present in the class components.


Codeflow-->
Constructor-->getDerivedFromProps-->Render-->componentDidMount


All this are the predefined methods
1.Mounting stage or phase-->
1.1 ->render method:This methos is used to insert the JSX content in the browser,this method is mandatory 
1.2->constructor method:Constructor is used for state initialization and binding the events in the class based components
1.3->ComponentDidMount:This method is used to cause the side effects(asynchronous tasks) on the page load

side-effects ex:-data fecthing,timers,eventlisteners,dom manipulations

1.4->getDerivedStateFromProps:This method is used to intialize the state based on the intial props 



whenever state changes occurs,code will goes to render,getDerivedFromProps
2.Updating stage or phase

2.1-->render method
2.2-->getDerivedStateFromProps
2.3-->componentDidUpdate
side-effects ex:-data fecthing,timers,eventlisteners,dom manipulations



2.4-->shouldComponentUpdate
2.5-->getSnapShotBeforeUpdate




3.Unmounting stage or phase
whenever the a components or elements is removed from the dom , this phase we can call it as unmounting phase
3.1-->componentWillUnmount-->This method is used to perform the cleanup tasks for the component
 This method is used to prevent the memory leaks like un-stop timer,remove event-listener,This method makes the app performance to increase

DOM: Drawbacks-->
1.Entire html will be re-render when the somthing upadte
2.More time to respond

Beacuse of this drawbacks we are going with the virtual dom


Virtual Dom:Virtual dom is a replica of original dom,which is just a memory representation
Virtual dom will be mantained by the react itself

within virtual dom we have two algorithms
1.diffing algorithm:diffing algorithm will check the previous state and current dom(previous dom and current  dom),these changes will be noted

2.reconsiliation algorithm:reconsiliation algorithm will perform the changes after comparision, only those changes will be updated in the real dom,without disturbing the other part of UI

note:Because of vdom updates are very faster,and loading time is minimal
ex:-10 list items,when new list item is inserted,react creates a v-dom,compares the changes with previous one, only updated new one