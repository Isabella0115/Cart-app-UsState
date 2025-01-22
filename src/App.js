import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import items from './Items';
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

  return (
    <div className="container my-4">
      <Header />
      {!isUserLogin && <LoginBanner/>}
      <Main items={items} />
      <Footer opening={openingHours} />
    </div>
  );
}

export default App;
