import { useEffect, useRef, useState } from 'react';
import './searchForm.css';
import { useNavigate } from 'react-router-dom';
const SearchForm = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (input) {
            navigate(`/search/${input}`);
            setInput('');
            inputRef.current.blur();
        }
    };

    return (
        <form className="header__form" id="searchForm" onSubmit={handleSearch}>
            <input
                className="header__input"
                id="searchInput"
                type="text"
                aria-label="Search"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
                placeholder="Search movie"
            />
            <button
                className="header__form-btn"
                id="searchBtn"
                aria-label="Search-button"
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
};

export default SearchForm;
