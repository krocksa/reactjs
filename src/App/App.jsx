import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
import Navbar from '../Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path='/:categoria' element={<ItemListContainer />} />
          </Routes>

        </BrowserRouter>
  );
}

export default App;
