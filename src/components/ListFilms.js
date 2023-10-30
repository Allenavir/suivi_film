import { filmList } from '../datas/listFilm'
import '../styles/ListFilms.css';


function ListFilms({ wishlist, setWishlist }) {

    const frenchDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    function addToWishlist(film) {
        //Check if it's not in the list
        const isAlreadyInWishlist = wishlist.find(wishedFilm => wishedFilm.name === film.name);

        // Add the selected card to the wishlist
        if (!isAlreadyInWishlist) {
            setWishlist([...wishlist, film])
        }
    };

    const removeFromWishlist = (film) => {
        // Filter out the film to remove from the wishlist
        const updatedWishlist = wishlist.filter((film) => film !== film);
        setWishlist(updatedWishlist);
      };

    return (
        <div id="movieList">
            {filmList.map((film, index) => (
                <div key={index} class='filmCard'>
                    <h2>{film.name}</h2>
                    <img className='poster' src={film.poster} alt={film.name} />
                    <p>Category: {film.category}</p>
                    <p>Director: {film.director}</p>
                    <p>Actors: {film.actors}</p>
                    <p>Release Date: {film.release_date.toLocaleDateString('fr-FR', frenchDateOptions)}</p>

                    {   // Only display the button is the film is not already in the WishList
                        // Can use find like above or some function
                        wishlist.some(wishedFilm => wishedFilm.name === film.name) ? (
                            <div>
                                <p>Ce film est deja dans la liste</p>
                                <button onClick={() => removeFromWishlist(film)}>Retirer le film de la liste</button>
                            </div>
                        ) : (
                            <button onClick={() => addToWishlist(film)}>Ajouter à la liste</button>
                        )
                    }

                </div>
            ))}
        </div>
    )
}

export default ListFilms