// let users = [
//     {
//         "firstName": "Shoval",
//         "lastName": "Barazani",
//         "color": "blue",
//         "age": "22"
//     },
//     {
//         "firstName": "Hila",
//         "lastName": "Arazoni",
//         "color": "pink",
//         "age": "23"
//     },
//     {
//         "firstName": "Koral",
//         "lastName": "Avraham",
//         "color": "yellow",
//         "age": "21"
//     }
// ];
// localStorage.setItem('usersStorage', JSON.stringify(users));
class Render {
    #users;
    constructor() {
        this.#users = JSON.parse(localStorage.getItem('usersStorage'));
    }
    renderHTML() {
        this.#users.forEach((user)=>{
            let newContainer = document.createElement('div');
            let leftSide = document.createElement('div');
            let rightSide = document.createElement('div');
    
            newContainer.setAttribute('class','newContainer');
            leftSide.setAttribute('class','leftSide');
            rightSide.setAttribute('class','rightSide');
    
            let text1 = document.createTextNode(`First name: ${user.firstName}, Surname: ${user.lastName}`);
            let text2 = document.createTextNode(`Color: ${user.color}, Age: ${user.age}`);

            leftSide.appendChild(text1);
            rightSide.appendChild(text2);

            newContainer.appendChild(leftSide);
            newContainer.appendChild(rightSide);

            document.body.appendChild(newContainer);
        });

    }
}

let newUsers = new Render();
newUsers.renderHTML();