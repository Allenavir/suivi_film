import '../styles/Wishlist.css';


function Wishlist({ wishlist }) {

    const frenchDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };


    return (
        <div id='wishList'>
            <h1>Mes films</h1>
            <div id='addedFilms'>
                {wishlist.map((film, index) => {
                    // Calculate the time difference in days
                    const currentDate = new Date();
                    const releaseDate = new Date(film.release_date);
                    const timeDifference = Math.floor((releaseDate - currentDate) / (1000 * 60 * 60 * 24));

                    // Format the release date in French
                    const formattedReleaseDate = releaseDate.toLocaleDateString('fr-FR', frenchDateOptions);

                    return (
                        <div key={index}>
                            <h3>{film.name}</h3>
                            <p>Date de sortie en France: {formattedReleaseDate }</p>
                            <p>Jours avant la sortie: {timeDifference} Jours</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Wishlist