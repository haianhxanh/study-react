import React, { useState} from 'react'
import MovieCard from './MovieCard.jsx'

export default function SearchMovies() {

  const [ query, setQuery ] = useState('')
  const [ movies, setMovies ] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=5cea0ba30792323a91d098ec01207ccc&language=en-US&query=${query}&page=1&include_adult=false`
    
    try {
      const res = await fetch(url)
      const data = await res.json()
      // console.log(data.results) // results is from the Object that we inspected in the console
      setMovies(data.results)
    }catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query"> Movie Name </label>
          <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"
            value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button className="button">search</button>
      </form>

      <div className="card-list">
        {/* filter through movies and only keep the one that have a poster */}
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}

      </div>
    </div>
  )
}