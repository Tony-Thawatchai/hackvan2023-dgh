import logo from './logo.svg';
import './App.css';
import ButtonBar from './components/ButtonBar';

function App() {
  const sliderItems = ["name","address","phone"];
  return (
    <div className="App">
      <h1>Slider Button</h1>
      <ButtonBar values={sliderItems} />
    </div>
  );
}

export default App;
