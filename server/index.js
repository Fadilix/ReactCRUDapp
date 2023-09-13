const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_contact"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    // const query = `INSERT INTO contact_db (name, email, contact) VALUES("john Doe", "john@gmail.com","1234567890")`
    // db.query(query, (err, result) => {
    //     if(err){
    //         console.error(err)
    //     }
    res.send("Hello, world");
    // })
})


app.get("/api/get", (req, res) => {
    query = "SELECT * FROM contact_db";
    db.query(query, (err, result) => {
        if (err) throw err
        res.send(result);
    })
});

app.get("/api/get/:id", (req, res) => {
    const {id} = req.params;
    query = "SELECT * FROM contact_db WHERE id = ?";
    db.query(query, id, (err, result) => {
        if (err) throw err
        res.send(result);
    })
});

app.put("/api/update/:id", (req, res) => {
    const {id} = req.params;
    const {name, email, contact} = req.body
    query = "UPDATE contact_db SET name = ?, email = ?, contact = ? WHERE id = ?";
    db.query(query, [name, email, contact, id], (err, result) => {
        if (err) throw err
        res.send(result);
    })
});


app.post("/api/post", (req, res) => {
    const { name, email, contact } = req.body;
    const query = `INSERT INTO contact_db (name, email, contact) VALUES(?, ?, ?)`;
    db.query(query, [name, email, contact], (error, result) => {
        if (error) throw error

    })
});

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM contact_db WHERE id = ?`;
    db.query(query, id, (error, result) => {
        if (error) throw error

    })
});
app.listen(8081, () => {
    console.log("Server is runing on port 8081");
});