import ImageList from '@mui/material/ImageList';
import PokemonCard from '../../components/PokemonCard';
import Searcher from '../../components/Searcher';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <div className='search-div'>
        <Searcher />
      </div>

      <ImageList style={{margin: "1rem 0rem"}}  sx={{ width: "100%" }}>
        <PokemonCard title={'Ditto'} img={''} text={'Fire and Magic'} />
      </ImageList>
    </div>
  );
}

export default App;
