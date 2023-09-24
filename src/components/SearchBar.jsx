import { useState } from "react";

export function SearchBar({searchValue, setSearchValue}){



    return (
        <div className="container mt-2" style={{maxWidth:"600px"}}>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchValue(e.target.value)}/>
            </form>
        </div>
    );
}