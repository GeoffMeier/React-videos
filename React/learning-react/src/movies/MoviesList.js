import React, {useState, useEffect} from 'react'
import { Movie } from './Movie'
import { Filter } from '../Filter'

// const movies = [
//     {
//         name: "36th Chamber"
//     },
//     {
//         name: "Harry Potter"
//     },
//     {
//         name: "Man of Iron"
//     },
// ]
const api_url = "https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key="
const config_url = "https://api.themoviedb.org/3/configuration?&language=en-US&page=1&sort_by=popularity.desc%27%20&api_key="
export function MoviesList(){
const [ filter, setFilter] = useState("")
const [movies,setMovies] = useState([])
const [config,setConfig] = useState({})
// const varName = useRef(initial value)
// const ulRef = useRef(null);
// const ref = useRef(null);

const getMovies = async () => {

    try{
const res = await fetch(api_url + process.env.REACT_APP_MOVIE_API)
const movies = await res.json()
setMovies(movies.results)

    }catch (e){
        console.error(e)
    }
}

const getConfig = async () => {

    try{
const res = await fetch(config_url + process.env.REACT_APP_MOVIE_API)
const config = await res.json()
setConfig(config)

    }catch (e){
        console.error(e)
    }
}

useEffect(() => {
    getConfig();
    getMovies();
}, [] )

    return (
<div >
    {/* <form onSubmit={(e) => {
        e.preventDefault()
        console.log(ref)
    }}>
        <input ref={ref}/>
        <button/>
    </form> */}
        <Filter filter={filter} setFilter={setFilter}/>
    <ul className='movies-list'>
        {movies.filter((movie) => 
          movie.title.toLowerCase().includes(filter.toLowerCase())
        ).map((movie) => (
                <Movie key={movie.id} config={config} movie={movie}/>
            )
        )}
    </ul>
</div>

    )
}