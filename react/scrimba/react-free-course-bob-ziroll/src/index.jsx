import React from "react";
import ReactDOM from "react-dom";
import MyInfo from "./01-02-components/MyInfo.jsx"; //we have to put ./ to specify that React has to look for the file in this folder, it is not necessary to do this with libraries, but needed for files 
import ParentChild from "./03-parent-child/ParentChild.jsx";
import Todo from "./00-todo-app/TodoApp.jsx";
import TodoApp from "./00-todo-app-redo/TodoApp.jsx";
import Props from "./05-props/Props.jsx";
import JokesApp from "./05-1-props-jokes/JokesApp.jsx";
import MappingApp from "./06-mapping-components/MappingApp.jsx";
import ProductApp from "./06-1-mapping-practice/ProductApp.jsx";
import Cl from "./07-class-based/Cl.jsx";
import State from "./08-state/StateApp.jsx";
import ChangeStateApp from "./08-1-change-state/ChangeStateApp.jsx";
import ConditionApp from "./11-conditional-render/ConditionApp.jsx";
import ConditionApp2 from "./11-conditional-render/ConditionApp2.jsx";
import ConditionApp3 from "./11-conditional-render/ConditionApp3.jsx";
import APIApp from "./12-api-fetching/APIApp.jsx"
import APIApp2 from "./12-api-fetching/APIApp2.jsx"
import FormApp from './13-forms/FormApp.jsx'
import FormBestApp from './13-forms/FormAppBestPractice.jsx'
import FormApp2 from './14-forms/FormApp2.jsx'
import FormsPracticeApp from './15-forms-practice/FormsPracticeApp.jsx'
import FormApp3 from './16-component-container/FormApp3.jsx'
import MemeApp from './17-meme-generator/MemeApp.jsx'
import HooksApp from './18-hooks/HooksApp.jsx'
import "./style.scss";
import "./index.html";


ReactDOM.render(<div><h1 style={{textAlign: 'center'}}>Hello! This is a React Course with Scrimba</h1></div>, document.getElementById("app"))


// create a functional component component, where we return what we want this component to represent, in our case the unordered list
function MyApp() {
  return (
  <ul>
    <li>Tomatoes</li>
    <li>Bananas</li>
    <li>Mango</li>
  </ul>
  )
}

ReactDOM.render(<MyInfo />,document.getElementById("my-info"));

ReactDOM.render(<ParentChild />, document.getElementById("parent-child"));

ReactDOM.render(<Todo />, document.getElementById("todo"));

ReactDOM.render(<TodoApp />, document.getElementById("todo-redo"));

ReactDOM.render(<Props />, document.getElementById("props"));

ReactDOM.render(<JokesApp />, document.getElementById('jokes'));

ReactDOM.render(<MappingApp />, document.getElementById('mapping'));

ReactDOM.render(<ProductApp />, document.getElementById('product'));

ReactDOM.render(<Cl />, document.getElementById('cl-based'));

ReactDOM.render(<State />, document.getElementById('state'));

ReactDOM.render(<ChangeStateApp />, document.getElementById('change'));

ReactDOM.render(<ConditionApp />, document.getElementById('condition'));

ReactDOM.render(<ConditionApp2 />, document.getElementById('condition2'));

ReactDOM.render(<ConditionApp3 />, document.getElementById('condition3'));

ReactDOM.render(<APIApp />, document.getElementById('api'))

ReactDOM.render(<APIApp2 />, document.getElementById('api2'))

ReactDOM.render(<FormApp />, document.getElementById('form-part1'))

ReactDOM.render(<FormBestApp />, document.getElementById('form-part1-best'))

ReactDOM.render(<FormApp2 />, document.getElementById('form-part2'))

ReactDOM.render(<FormsPracticeApp />, document.getElementById('forms-practice'))

ReactDOM.render(<FormApp3 />, document.getElementById('component'))

ReactDOM.render(<MemeApp />, document.getElementById('meme'))

ReactDOM.render(<HooksApp />, document.getElementById('hooks-app'))