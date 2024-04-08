'use strict';

const bodyEl = document.querySelector('body');

function printData(array) {
    bodyEl.innerHTML = '';
    array.forEach(element => {
        bodyEl.insertAdjacentHTML('beforeend', `
    <div class="user" id="${element.id}">
        <p class="number">${element.id}</p>
        <h3 class="name">Name - ${element.name}</h3> 
        <p class="user-name">User name - ${element.username}</p> 
        <p class="email">Email - ${element.email}</p> 
        <p class="phone">Phone - ${element.phone}</p> 
        <p class="website">Website - ${element.website}</p>
        <button class="delete">delete</button> 
    </div> 
    `);
    });
}

const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const fetchData = await getData();

const arrayUsers = [...fetchData]; // чтобы сохранить изначальный вид массива

const localStor = localStorage.setItem('usersData', JSON.stringify(arrayUsers));

printData(arrayUsers);

bodyEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        arrayUsers.forEach(el => {
            if (el.id == e.target.parentElement.id)
                arrayUsers.splice(arrayUsers.indexOf(el), 1);
            localStorage.setItem('usersData', JSON.stringify(arrayUsers));
            printData(arrayUsers);
        });
    };
})
