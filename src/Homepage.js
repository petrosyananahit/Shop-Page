import './App.css';
import Comments from './components/Comments';
import Main from './components/Main';
import Products from './components/Products';
import StylingProducts from './components/StylingProducts';

function Homepage() {
  return (
    <div className="App">
      <Main/>
      <Products/>
      <StylingProducts/>
      <Comments/>
    </div>
  );
}

export default Homepage;