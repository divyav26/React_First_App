
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import jeans from './img/p1.jpg'
import moblie from './img/p2.jpg'
import dell from './img/p3.webp'

function App() {
  return (
    <div className="App">
     <Header />
     <div className='product_list'>
     <Products name="Levis jeans" price = "500"  url={jeans}/>
     <Products name="Sumsung M51" price = "35000"  url={moblie}/>
     <Products name="Dell Laptop" price = "500000"  url={dell} />
    </div>
    <Footer />
    </div>
  );
}

export default App;
