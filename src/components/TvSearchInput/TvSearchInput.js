import React, {useState} from "react"
import { ReactSVG } from "react-svg"
import { Input, TvSearchInputContainer } from "./styled"

import searchIcon from "../../assets/icons/search.svg"

export default function TvSearchInput(props) {
    const [searchValue, setSearchValue] = useState("")

    // METHODS
    const handleChange = e => {
        setSearchValue(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        props.onSearch(searchValue)
        setSearchValue("")
    }

    return (
        <TvSearchInputContainer onSubmit={handleSearch}>
            <Input placeholder={props.placeholder} onChange={handleChange} value={searchValue} />
            <ReactSVG src={searchIcon} />
        </TvSearchInputContainer>
    )
}
