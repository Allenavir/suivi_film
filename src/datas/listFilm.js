import dune2 from '../assets/dune2.jpg'
import heron from '../assets/garconheron.jpg'
import freddy from '../assets/freddys.jpg'
import marsExpress from '../assets/marsExpress.jpg'
import wonka from '../assets/wonka.jpg'

export const filmList = [
    {
        name: 'Dune: Part Two',
        category: 'Science Fiction',
        director: 'Denis Villeneuve',
        actors: 'Timothée Chalamet, Zendaya, Rebecca Ferguson',
        release_date: new Date('13/03/2024'),
        poster: dune2,
    },
    {
        name: 'Le Garçon et le Héron',
        category: 'Animation',
        director: 'Hayao Miyazaki',
        actors: 'Masaki Suda, Takuya Kimura, Kô Shibasaki',
        release_date: new Date('01/11/2023'),
        poster: heron,
    },
    {
        name: 'Five Nights At Freddys',
        category: 'Epouvante-horreur',
        director: 'Emma Tammi',
        actors: 'Josh Hutcherson, Elizabeth Lail, Matthew Lillard',
        release_date: new Date('08/11/2023'),
        poster: freddy,
    },
    {
        name: 'Mars Express',
        category: 'Animation',
        director: 'Jérémie Périn',
        actors: 'Léa Drucker, Mathieu Amalric, Daniel Njo Lobé',
        release_date: new Date('22/11/2023'),
        poster: marsExpress,
    },
    {
        name: 'Wonka',
        category: 'Fantastique',
        director: 'Paul King',
        actors: 'Timothée Chalamet, Keegan-Michael Key, Sally Hawkins',
        release_date: new Date('13/12/2023'),
        poster: wonka,
    }
]