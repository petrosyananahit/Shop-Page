import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './Layout';
import Homepage from './Homepage';
import Errorpage from './Errorpage';
import Singlepage from './Singlepage';
import CartPage from './CartPage';
import Products from './components/Products/Products';
import CategoryPage from './CategoryPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="products/:id" element={<Layout><Singlepage /></Layout>} />
          <Route path="categories/products/:id" element={<Layout><Singlepage /></Layout>} />
          <Route path="products/:id/products/:id" element={<Layout><Singlepage /></Layout>} />
          <Route path="products/card" element={<Layout><CartPage /></Layout>} />
          <Route path="/categories" element={<Layout><CategoryPage /></Layout>} />
          <Route path="*" element={<Layout><Errorpage /></Layout>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;