import './App.css';
import Header from './components/Header';
import List from './components/List';
import Select from './components/Select';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Select/>
      <Input placeholder={"Single Journey"} type={'number'} />
    </div>
  );
}

export default App;
