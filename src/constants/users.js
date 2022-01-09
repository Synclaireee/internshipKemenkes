const PASSWORD = "12345678"
const EMAIL = [...Array(10).keys()].map( i =>{
    return `TestEmail${i+1}@gmail.com`;
});

const users = EMAIL.map(item=>{
    return {
        "EMAIL":item,
        PASSWORD
    }
})

export default users;