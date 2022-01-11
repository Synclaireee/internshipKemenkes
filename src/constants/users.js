const PASSWORD = "12345678"
const REGION = "SUMATERAUTARA"
const EMAIL = [...Array(10).keys()].map( i =>{
    return `TestEmail${i+1}@gmail.com`;
});

const users = EMAIL.map(item=>{
    return {
        "EMAIL":item,
        PASSWORD,
        REGION
    }
})

users.push({
    "EMAIL": "TestEmail11@gmail.com",
    PASSWORD,
    "REGION": "ALL"
})

users.push({
    "EMAIL": "admin@admin.com",
    PASSWORD,
    "REGION": "ALL"
})

export default users;