import './App.css';
import Comments from './components/Comments/Comments';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import SectionAboutProductStyles from './components/SectionAboutProductStyles/SectionAboutProductStyles';


function Homepage() {
  return (
    <div className="App">
      <Main/>
      <h1 className="titleForProducts">NEW ARRIVALS</h1>
      <Products/>
      <SectionAboutProductStyles/>
      <div className='containerForComments'>
      <h1 className='titleForComments'>OUR HAPPY CUSTOMERS</h1>
      </div>
      <Comments/>
    </div>
  );
}

export default Homepage;