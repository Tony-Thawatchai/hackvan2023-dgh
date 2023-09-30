import logo from './logo.svg';
import './App.css';
import ButtonBar from './components/ButtonBar';
import NameCard from './components/NameCard';

function App() {
  const sliderItems = ["name","address","phone"];
  return (
    <div className="App">
      <h1>Slider Button</h1>
      <ButtonBar values={sliderItems} />
      <NameCard data={{name:"dd", address:"123 Main st.", FamilyMount: 4, servedDate: "2023-09-01"}}/>

    </div>
  );
}

export default App;
