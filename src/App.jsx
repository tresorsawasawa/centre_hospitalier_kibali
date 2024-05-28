import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="main">
    <Header />

    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default App;
