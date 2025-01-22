import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import { fetchProducts } from './utils/fetchData'; 
import { useState, useEffect } from 'react';
import './App.css';


const LoginBanner = ({ status }) => {
  const alertClasses = {
    success: 'alert-success',
    warning: 'alert-warning',
    danger: 'alert-danger',
    info: 'alert-info',
  };

  const alertClass = alertClasses[status] || 'alert-primary';

  return (
    <div className={`alert ${alertClass} my-3`} role="alert">
      <h4 className="alert-heading">You are not logged in.</h4>
      <p>You may now log-in with the username you have chosen.</p>
    </div>
  );
};

function App() {
  const openingHours = "We are open from 9:00 AM to 6:00 PM";
  const isUserLogin = false;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(); 
      setProducts(data); 
      setLoading(false); 
    };

    getProducts(); 
  }, []); 

  return (
    <div className="container my-4">
      <Header />
      {!isUserLogin && <LoginBanner />}
      {loading ? <p>Loading products...</p> : <Main items={products} />}
      <Footer opening={openingHours} />
    </div>
  );
}

export default App;
