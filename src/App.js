import './App.css';
import Jobs from './components/Jobs';

function App() {
  return (
    <div className="App">
      <noscript>Please Enable Js in your Browser</noscript>
      <h1>My toDo LIST</h1>
      <h2>Just add your List and forget <br/>write whatever you want inside the squire</h2>
      <div className="children">
      <Jobs/>
      </div>  
    </div>
  );
}

export default App;
