import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './Layout';
import Homepage from './Homepage';
import Errorpage from './Errorpage';
import Singlepage from './Singlepage';
import CartPage from './CartPage';
import CategoryPage from './CategoryPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/products/:id" element={<Singlepage />}/>
            <Route path="categories/products/:id" element={<Singlepage/>} />
            <Route path="products/card" element={<CartPage/>} />
            <Route path="categories" element={<CategoryPage/>} />
          </Route>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;