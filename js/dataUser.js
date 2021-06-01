const userDB = [
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'tuanhiep19',
        password: '19072002'
    }
]

localStorage.setItem("userDatabase", JSON.stringify(userDB));
let getData = localStorage.getItem("userDatabase"); 
let data = JSON.parse(getData);