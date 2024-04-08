'use strict';

const bodyEl = document.querySelector('body');

const getData = async () => {
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/10');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchData = await getData();
console.log(fetchData);
const arrayImages = fetchData.message;
console.log(arrayImages);
let count = 0;

const indexInterval = setInterval(function () {
    bodyEl.insertAdjacentHTML('afterbegin', `
    <img src="${arrayImages[count++]}" alt="photo">
`);
    if (count === 10) clearInterval(indexInterval);
}, 3000);

