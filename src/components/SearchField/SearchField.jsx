import './searchField.css';
const SearchField = () => {
	return (
		<form className='header__form' id='searchForm'>
			<input className='header__input' id='searchInput' type='text' aria-label='Search' />
			<button className='header__form-btn' id='searchBtn' aria-label='Search-button'>
				<i className='fa-solid fa-magnifying-glass'></i>
			</button>
		</form>
	);
};

export default SearchField;
