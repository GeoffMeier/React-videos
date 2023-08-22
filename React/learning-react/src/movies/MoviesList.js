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
const api_url = "https://api.themoviedb.org/3/discover/movie?api_key=0331ed2d215397f9db6be74081ea441e&language=en-US&page=1&sort_by=popularity.desc%27%20"

export function MoviesList(){
const [ filter, setFilter] = useState("")
const [movies,setMovies] = useState([])
// const varName = useRef(initial value)
// const ulRef = useRef(null);
// const ref = useRef(null);

const getMovies = async () => {

    try{
const res = await fetch(api_url)
const movies = await res.json()
setMovies(movies.results)

    }catch (e){
        console.error(e)
    }
}

useEffect(() => {
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
    <ul>
        {movies.filter((movie) => 
          movie.title.toLowerCase().includes(filter.toLowerCase())
        ).map((movie) => (
                <Movie key={movie.id} movie={movie}/>
            )
        )}
    </ul>
</div>

    )
}