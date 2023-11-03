import '../styles/Wishlist.css';

function Wishlist({ wishlist }) {    

    const frenchDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    // Sort the wishlist based on timeDifference (ascending order)
    const sortedWishlist = wishlist.slice().sort((a, b) => {
        const timeDifferenceA = Math.floor((new Date(a.release_date) - new Date()) / (1000 * 60 * 60 * 24)) + 1;
        const timeDifferenceB = Math.floor((new Date(b.release_date) - new Date()) / (1000 * 60 * 60 * 24)) + 1;
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
                    const timeDifference = Math.floor((releaseDate - currentDate) / (1000 * 60 * 60 * 24)) + 1;

                    // Format the release date in French
                    const formattedReleaseDate = releaseDate.toLocaleDateString('fr-FR', frenchDateOptions);


                    let message;
                    if (timeDifference > 0) {
                        message = `Jours avant la sortie: ${timeDifference} Jours`;
                    } else if (timeDifference < 0) {
                        message = `Deja sortie depuis ${Math.abs(timeDifference)} jours`;
                    } else {
                        const messagesTable = [
                            "Le film sort aujourd'hui ! Tous au ciné",
                            "Découvrez la nouvelle sortie cinéma !",
                            "Le film tant attendu est enfin là.",
                            "En salle! N'oubliez pas de prendre du popcorn !",
                            "Popcorn, check. Boisson, check. Prêt pour le film !"
                        ];
                        // Generate a random index to select a random message
                        const randomIndex = Math.floor(Math.random() * messagesTable.length);

                        // Get the random message
                        message = messagesTable[randomIndex];
                    }

                    return (
                        <div class='wishListItem' key={index}>
                            <h3>{film.title}</h3>
                            <p>Date de sortie en France: {formattedReleaseDate}</p>
                            <p>{message}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Wishlist