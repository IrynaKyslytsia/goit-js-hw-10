import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(evt) {
    evt.preventDefault();
    const searchValue = input.value.trim();
    console.log(searchValue)
    fetchCountries(searchValue)
    .then(checkInput)
    .catch(error => console.log(error));
}

function renderCountryList(countries) {
    return countries.map(({name, flags}) => {
        return `
        <li class="card-item">
        <img class="card-img" src="${flags.svg}" alt="${flags.alt}">
        <h2 class="card-title">${name.official}</h2>
       </li>
       `
    }).join('')
}

function renderCountryInfo(countries) {
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
}

function checkInput(countries) {
    if (countries.length > 10) {
        window.alert("Too many matches found. Please enter a more specific name.")
    } else if (countries.length >= 2 && countries.length <= 10) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        countryList.insertAdjacentHTML('beforeend', renderCountryList(countries))
    } else if (countries.length === 1) {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries))
    } 
}