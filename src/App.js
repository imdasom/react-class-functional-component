import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';

function App() {
  return (
    <div className={'app'}>
      <div className={'content'}>
        <h1>Class Component</h1>
        <ClassComponent />
      </div>
      <div className={'content'}>
        <h1>Functional Component</h1>
        <FunctionalComponent />
      </div>
    </div>
  );
}
export default App;
