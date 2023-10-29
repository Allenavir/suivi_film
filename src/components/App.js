import '../styles/App.css';
import Header from './Header';
import ListFilms from './ListFilms';
import Wishlist from './WishList';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div id='content'>
        <Wishlist />
        <ListFilms />
      </div>
      <Footer />
    </div>
    )
}

export default App;
