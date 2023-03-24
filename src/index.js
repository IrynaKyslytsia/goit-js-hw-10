import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from "lodash.debounce";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(evt) {
    evt.preventDefault();
    const searchValue = input.value.trim();
    console.log(searchValue)
    if (searchValue != '') {
        fetchCountries(searchValue)
        .then(renderCountry)
        .catch(onFetchError);
    }
};

function createCountryList(countries) {
    return countries.map(({name, flags}) => {
        return `
        <li class="card-item">
        <img class="card-img" src="${flags.svg}" alt="${flags.alt}">
        <h2 class="card-title">${name.official}</h2>
       </li>
       `
    }).join('')
};

function createCountryInfo(countries) {
    return countries.map(({name, flags, capital, population, languages}) => {
        return `
        <div class="card-heading">
            <img class="card-img card-img--big" src="${flags.svg}" alt="${flags.alt}">
            <h2 class="card-title">${name.official}</h2>
        </div>
        <div class="card-body">
            <p class="card-text"><b>Capital:</b> ${capital}</p>
            <p class="card-text"><b>Population:</b> ${population}</p>
            <p class="card-text"><b>Languages:</b> ${Object.values(languages).join(', ')}</p>
        </div>
        `
    }).join('')
};

function renderCountry(countries) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
    if (countries.length > 10) {
        Notify.info("Too many matches found. Please enter a more specific name.")
    } else if (countries.length >= 2 && countries.length <= 10) {
        countryList.insertAdjacentHTML('beforeend', createCountryList(countries))
    } else if (countries.length === 1) {
        countryInfo.insertAdjacentHTML('beforeend', createCountryInfo(countries))
    }    
};

function onFetchError() {
    Notify.failure("Oops, there is no country with that name");
}