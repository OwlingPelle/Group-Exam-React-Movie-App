import React from 'react';

const Header = () => {
	return (
		<header class='header'>
			<div class='content-wrapper header__flex'>
				<a href='index.html' class='fa-solid fa-house header__home-icon'></a>
				<a href='index.html'>
					<img class='header__logo' src='./res/logo.svg' alt='logotype' />
				</a>
				<form class='header__form' id='searchForm'>
					<input class='header__input' id='searchInput' type='text' aria-label='Search' />
					<button class='header__form-btn' id='searchBtn' aria-label='Search-button'>
						<i class='fa-solid fa-magnifying-glass'></i>
					</button>
				</form>
				<section class='header__favorites'>
					<a href='./favorites.html' class='header__fav-btn' id='favBtn'>
						<i class='fa-solid fa-star header__fav-star'></i>
						<span class='header__fav-text'>Favorites</span>
					</a>
					<div class='header__count-icon d-none' id='favCountContainer'>
						<p class='header__count-number' id='favCount'></p>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
