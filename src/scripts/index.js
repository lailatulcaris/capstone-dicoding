/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

const menu_hamburger = document.querySelector('#menu_hamburger');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#navigation_drawer');

menu_hamburger.addEventListener('click', function (event) {
    navigation_drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    navigation_drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    navigation_drawer.classList.remove('open');
});
