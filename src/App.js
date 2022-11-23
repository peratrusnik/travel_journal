import './App.css';
import Header from './components/header';
import Cards from './components/cards';
import data from './data'

function App() {

  const dataCards = data.map(item => {
    return (
      <Cards key={item.id}
        item={item} />
    )
  })
  return (
    <div className="App">
      <div className="travel">
        <Header />
        {dataCards}
      </div>
    </div>
  );
}

export default App;
