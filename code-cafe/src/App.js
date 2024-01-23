import Header from './components/Header';
import Home from './components/Home';
import { items } from './items';

function App() {
  return (
    <div className="App">
      <Header title="Southaven" />
      <Home items={items} />
    </div>
  );
}

export default App;
