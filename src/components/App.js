import { useState } from 'react'
import '../styles/App.css';
import Header from './Header';
import ListFilms from './ListFilms';
import Wishlist from './WishList';
import Footer from './Footer';


function App() {
  // Create a useState that contains the films selected
  const [wishlist, setWishlist] = useState([]);


  //send the properties to the component that needs to read or update the wishList
  return (
    <div className="App">
      <Header />
      <div id='content'>
        <Wishlist wishlist={wishlist} />
        <ListFilms  wishlist={wishlist} setWishlist={setWishlist}/>
      </div>
      <Footer />
    </div>
    )
}

export default App;