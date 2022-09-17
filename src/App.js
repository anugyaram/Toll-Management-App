import './App.css';
import Header from './components/Header';
import List from './components/List';
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Select size={"large"}/>
    </div>
  );
}

export default App;
