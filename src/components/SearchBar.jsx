import { useState } from "react"

export default function SearchBar ({handleSearch}) {
    const [term, setTerm] = useState('')
    const onFormSubmit = e => {
        e.preventDefault()
        handleSearch(e, term)
    }
    return (
        <form onSubmit= {onFormSubmit}>
            <input 
                type='text'
                placeholder="enter a search term here"
                onChange={ e => setTerm(e, term.current.value )}
            />
            <input type="submit" />
        </form>
    )
}