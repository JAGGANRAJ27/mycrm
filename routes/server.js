import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crm'
});

app.get('/', (req, res) => {
    const sql = "SELECT * FROM projects";
    db.query(sql, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            res.send(data);
        }
    })
})

app.listen(3001, () => {
    console.log( 'Server running on port 3001' );
})