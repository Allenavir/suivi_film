import '../styles/Wishlist.css';


function Wishlist({ wishlist }) {

    const frenchDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    // Sort the wishlist based on timeDifference (ascending order)
    const sortedWishlist = wishlist.slice().sort((a, b) => {
        const timeDifferenceA = Math.floor((new Date(a.release_date) - new Date()) / (1000 * 60 * 60 * 24))+1;
        const timeDifferenceB = Math.floor((new Date(b.release_date) - new Date()) / (1000 * 60 * 60 * 24))+1;
        return timeDifferenceA - timeDifferenceB;
    });

    return (
        <div id='wishList'>
            <h1>Mes films</h1>
            <div id='addedFilms'>
                {sortedWishlist.map((film, index) => {
                    // Calculate the time difference in days
                    const currentDate = new Date();
                    const releaseDate = new Date(film.release_date);
                    const timeDifference = Math.floor((releaseDate - currentDate) / (1000 * 60 * 60 * 24))+1;

                    // Format the release date in French
                    const formattedReleaseDate = releaseDate.toLocaleDateString('fr-FR', frenchDateOptions);

                    return (
                        <div key={index}>
                            <h3>{film.name}</h3>
                            <p>Date de sortie en France: {formattedReleaseDate}</p>
                            <p>Jours avant la sortie: {timeDifference} Jours</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Wishlist