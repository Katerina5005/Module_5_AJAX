/*window.addEventListener('DOMContentLoaded' , () => {

    function req() {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            const response = JSON.parse(this.response);
            console.log(response)
            const htmlCOdeTORender = `
            <div>
                <img src="${response.data.avatar}" width="150px" height="150px">  </img>
                <p> ${response.data.first_name} ${response.data.last_name} </p>
                <p>${response.data.email} </p>
            </div>
            `;
            document.getElementById('content').innerHTML = htmlCOdeTORender;
        }
        xhr.open('GET', 'https://reqres.in/api/users/2');
        xhr.send();
    }
    document.getElementById('button').addEventListener('click', req)
})*/


function req() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const response = JSON.parse(this.response);
        console.log(response)
        
        response.forEach(item => {
           let card = document.createElement('div');

            card.classList.add('card')

            card.innerHTML = `
                <p class='name'> ${item.name} </p>
                <p class='user_name'> ${item.username} </p>
                <p class='email'> ${item.email} </p>
            `;
            document.querySelector('.app').appendChild(card)
        })

    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
}

document.getElementById('button').addEventListener('click', req, {'once': true});



