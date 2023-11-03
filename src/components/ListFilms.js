import React, { useState, useEffect } from 'react';
import '../styles/ListFilms.css';


function ListFilms({ wishlist, setWishlist }) {
    //const [currentPage, setCurrentPage] = useState(1);
    const [movieDetails, setMovieDetails] = useState([]);
    const apiKey = '58e3fa24af48976ae1f49bb7bafc986c';


    useEffect(() => {
        // API call data    
        const language = 'fr-FR';        
        const resultsPerPage = 9;
        const page = 1;

        const currentDate = new Date();
        const sixMonthsAgo = new Date(currentDate);
        sixMonthsAgo.setMonth(currentDate.getMonth() - 1);
        const sixMonthsLater = new Date(currentDate);
        sixMonthsLater.setMonth(currentDate.getMonth() + 1);
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        // Function to fetch a page of results
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=${firstDayOfMonth.toISOString().split('T')[0]}&primary_release_date.lte=${lastDayOfMonth.toISOString().split('T')[0]}&region=FR&with_release_type=3&sort_by=release_date.asc`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the list of movies
                const movieIds = data.results.map(movie => movie.id);

                // Use Promise.all to make multiple API calls for movie details
                const promises = movieIds.map(movieId => {
                    // Second API call to get more details about the movie using its ID
                    const movieDetailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}&append_to_response=credits`;

                    return fetch(movieDetailsApiUrl)
                        .then(response => response.json())
                        .catch(error => {
                            console.error('Error fetching movie details:', error);
                            return {};
                        });
                });

                Promise.all(promises)
                    .then(details => {
                        setMovieDetails(details);
                    })
                    .catch(error => {
                        console.error('Error fetching movie details:', error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }, [apiKey]);


    //}   

    /*
    useEffect(() => {
        fetchPage(currentPage);
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    */

    const frenchDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    function addToWishlist(filmToAdd) {
        // Check if it's not in the list
        const isAlreadyInWishlist = wishlist.some(wishedFilm =>wishedFilm.id === filmToAdd.id);
    
        if (!isAlreadyInWishlist) {
            // Add the selected card to the wishlist
            setWishlist([...wishlist, filmToAdd]);
    
            // Store the updated wishlist in local storage
            localStorage.setItem('wishlist', JSON.stringify([...wishlist, filmToAdd]));
        }
    }

    const removeFromWishlist = (filmToRemove) => {
        // Filter out the film to remove from the wishlist based on its name
        const updatedWishlist = wishlist.filter((wishedFilm) => wishedFilm.id !== filmToRemove.id);
        setWishlist(updatedWishlist);
    };

    return (
        <div id="movieList">
             
            {movieDetails.map((movie, index) => (
                <div key={index} class='filmCard'>
                    <h2>{movie.title}</h2>
                    <img  className='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <p>Genre: {movie.genres.map(genre => genre.name).join(', ') || 'Not available'}</p>
                    <p>Réalisateur: {movie.credits.crew.find(crewMember => crewMember.job === 'Director')?.name || 'Not available'}</p>
                    <p>Acteurs: {movie.credits.cast.slice(0, 3).map(actor => actor.name).join(', ') || 'Not available'}</p>
                    <p>Date de sortie en France: {new Date(movie.release_date).toLocaleDateString('fr-FR', frenchDateOptions) || 'Not available'}</p>
                    {wishlist.some(wishedFilm => wishedFilm.id === movie.id) ? (
                        <div>
                            <p>Ce film est déjà dans la liste</p>
                            <button onClick={() => removeFromWishlist(movie)}>Retirer le film de la liste</button>
                        </div>
                    ) : (
                        <button onClick={() => addToWishlist(movie)}>Ajouter à la liste</button>
                    )}
                </div>
            ))}               
        </div>
    )
}

export default ListFilms