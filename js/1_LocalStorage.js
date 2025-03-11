// let password = "123";
// const userAge = 1235

// let newPassword = "newpass";


// localStorage.setItem("userPassword", password)
// localStorage.setItem("ageUser", userAge)

// localStorage.setItem("userPassword", newPassword)

// const age = localStorage.getItem("ageUser")
// // localStorage.removeItem("ageUser") Удалить определенный обьект в LocalStorage
// // localStorage.clear() Удалить все
// console.log(age)




//                                                                       task 1

// const nameData = document.getElementById('nameData');
// const ageData = document.getElementById('ageData');
// const emailData = document.getElementById('emailData');
// const addData = document.getElementById('addData');
// const nowData = document.getElementById('nowData');

// function addDataFunction(name, age, email) {
//     localStorage.setItem("name", name);
//     localStorage.setItem("age", age);
//     localStorage.setItem("email", email);
// }

// function showDataFunction() {
//     const p = document.createElement('p')
//     p.textContent = `
//         name: ${localStorage.getItem("name")}
//         age: ${localStorage.getItem("age")}
//         email: ${localStorage.getItem("email")}
//     `
//     nowData.append(p);
// }

// function updateData() {

//     showDataFunction();
// }

// addData.addEventListener('click', () => {
//     const name = nameData.value;
//     const age = ageData.value;
//     const email = emailData.value;
//     updateData();
//     addDataFunction(name, age, email);
// })

// showDataFunction();

//                                                                       task 2

// const toDoArray = ["Buy milk", "call to friend"]
// localStorage.setItem('todoarr', JSON.stringify(toDoArray))

// let savedtodo = JSON.parse(localStorage.getItem("todoarr"))

// savedtodo.forEach(el => {
//     console.log(el)
// });


//                                                                       task 3


const changeTheme = document.getElementById('changeTheme');

function darkTheme() {
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('h1').classList.add("white")
    document.querySelector('h1').classList.remove("black")
}
function ligthTheme() {
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('h1').classList.add("black")
    document.querySelector('h1').classList.remove("white")
}

changeTheme.addEventListener('click', () => {
    if (changeTheme.classList.toggle("black")) {
        ligthTheme()
    } else {
        darkTheme()
    }
})