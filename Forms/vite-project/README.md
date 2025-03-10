Forms:

There are two ways to handle forms in the react application:
1.Uncontrolled componenets
->In uncrotrolled componenets input state changes will be controlled by the DOM
->Field validations were not possible were not possible in the Uncontrolled componenets,overall form validations were possible
->Maintanance will be difficult

2.Controlled components
->In Control componentsinput state changes will be controlled by the React-itself
->Field validations were possible were possible in the Controlled componenets
->Maintanance will be easy


Forms inportant Terms:-
1.state management
2.validations
3.submissions(HTTP REQUEST)


1.Uncontrolled Componenets:

useRef :- -->useRef is a Hook in the functional components which directly access the DOM through the reference

-->useRef Hook persist the values betwwen the renders
-->useRef Hook doesn't cause the re-render

syntax:-  useRef accepts the initial value(optional) and returns the variable which we can use for attaching for the node references

intial value is optional in this useRef

const ref=useRef()

-->we need to import the useRef from the react

Steps to create the uncontrolled components:-
1.Implement the form which contain JSX
2.Create the referenecsfor inputs using useRef hook provided by the react
3.Attach the references for the input using ref attribute given to the inputs
4.on submit collect user input using ref.current.value