import { Routes, Route } from 'react-router-dom'

import UpButton from './components/upButton/upButton'
import Home from './pages/home/home'
import Cv from './pages/cv/cv'
import Formation from './pages/formation/formation'
import NoRepley from './pages/noRepley/noRepley'

import Film from './pages/film/film'
import FilmPlay from './pages/filmPlay/filmPlay'

function App() {
    return (
    <>  
      <UpButton/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cv' element={<Cv/>}/>
        <Route path='/formation' element={<Formation/>}/>
        <Route path='*' element={<NoRepley/>}/>
        <Route path='/film' element={<Film/>}/>
        <Route path='/film/:id' element={<FilmPlay/>}/>
      </Routes>
    </>
  );
}

export default App;
