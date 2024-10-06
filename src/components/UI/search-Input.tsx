'use client'

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./input"
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
}

export const SearchInput = ({defaultValue}: Props) => {
    const Router = useRouter();
    const [searchInput, setSearchInput] = useState(defaultValue?? '');

    const handleSearchEnter = () => {
        if(searchInput) {
            Router.push('/search?q=' + encodeURIComponent(searchInput))
        }
    }
    return (
        <Input
            type="search"
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={searchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    )
}