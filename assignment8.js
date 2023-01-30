const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'trainee'
});

dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

app.post('/register', (req, res) => {
    console.log(req.body);
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    var query = `INSERT INTO register (firstname, lastname, email, password) VALUES ("${firstname}","${lastname}","${email}","${password}")`;
    dbConn.query(query, function (err, results) {
        if(err) throw err;
        return res.send({data: results, message: 'Data Added successfully.'});
    });
});

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});