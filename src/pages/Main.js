import Header from '../components/Header';
import List from '../components/List';
import AddToll from './AddToll';

function Main(){
    return (
        <div className="Main">
          <Header/>
          <List/>
          <AddToll />
        </div>
      );
}
export default Main;