import { useState } from 'react'
import Listitem from './Listitem.js';
import movies from '../data/movies';

console.log(movies)

const Filmlist = () => {

    const [sortedMovies, setSortedMovies] = useState(movies);

    const sortDateUp = () => {
        const sorted = [...sortedMovies].sort((a, b) => Number(a.year) - Number(b.year))
        setSortedMovies(sorted);
    }

    const sortDateDown = () => {
        const sorted = [...sortedMovies].sort((a, b) => Number(b.year) - Number(a.year))
        setSortedMovies(sorted);
    }

    const sortRate = () => {
        const sorted = [...sortedMovies].sort((a, b) => b.rate - a.rate)
        setSortedMovies(sorted);
    }

    const sortGenre = () => {
        const sorted = [...sortedMovies].sort((a, b) => a.genre[0].localeCompare(b.genre[0]));
        setSortedMovies(sorted);
    }

    const sortTitleAtoZ = () => {
        const sorted = [...sortedMovies].sort((a, b) => a.title.localeCompare(b.title));
        setSortedMovies(sorted);
    }

    const sortTitleZtoA = () => {
        const sorted = [...sortedMovies].sort((a, b) => b.title.localeCompare(a.title));
        setSortedMovies(sorted);
    }

    const listItems = sortedMovies.map((elt, index) => {
        return (
            <Listitem
                key={index}
                title={elt.title}
                year={elt.year}
                director={elt.director}
                duration={elt.duration}
                rate={elt.rate}
                genre={elt.genre}
            />
        )
    })

    return (
        <section className='flex_button_section'>
            <button onClick={sortDateUp}>Sort by Date Ascending</button>
            <button onClick={sortDateDown}>Sort by Date Descending</button>
            <button onClick={sortRate}>Best Rate</button>
            <button onClick={sortGenre}>Genre</button>
            <button onClick={sortTitleAtoZ}>A-Z</button>
            <button onClick={sortTitleZtoA}>Z-A</button>
            <div className='flex_moviecards'>{listItems}</div>
        </section>
    );
}

export default Filmlist;