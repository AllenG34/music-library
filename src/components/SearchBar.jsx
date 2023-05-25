import { useContext } from "react"
import { SearchContext } from "../contexts/SearchContext"

export default function SearchBar () {
    const {term, handleSearch} = useContext(SearchContext)


    return <form>
        <input 
            ref={term}
            type='text'
            placeholder="enter a search term here"
            onChange={ e => handleSearch(e, term.current.value )}
        />
        <input type="submit" />
    </form>
}