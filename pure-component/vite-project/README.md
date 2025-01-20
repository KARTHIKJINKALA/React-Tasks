# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Composition in the React: Component is responsible for performing specific UI and functionality tasks,every component will be nested to get the final UI, this nesting of components to form thr final UI, we call it as the Composition in the react


Problem: Every component re-renders when the parent components is re-renders which slows the application performance

Solution:Childeren has to re-render when the childern state or props changes

Pure Component:Pure component helps us to skip the unneccesary renders of the components it makes the component to update only when state or prop
Internally pure component have the sholudComponentUpdate lifecycle


Task:

Problem:I need to implement the circles based on the user events on the button
1.step:Genearate the circle,create the circle
2.Add the button for circle addition,for every event push the true flag to the array