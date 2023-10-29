import { filmList } from '../datas/listFilm'
import '../styles/ListFilms.css';


function ListFilms() {  
    return (
        <div id="movieList">

            {filmList.map((film, index) => (
                <div key={index} class='filmCard'>
                    <h2>{film.name}</h2>
                    <img class='poster' src={film.poster} alt={film.name} />
                    <p>Category: {film.category}</p>
                    <p>Director: {film.director}</p>
                    <p>Actors: {film.actors}</p>
                    <p>Release Date: {film.release_date.toDateString()}</p>
                    <button>Ajouter à la liste</button>                
                </div>
            ))}
        </div>
    )
}

export default ListFilms