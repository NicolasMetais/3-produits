const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors'); // autorise le partage d'informations

const dbFile = 'test.db';
const db = new sqlite3.Database(dbFile);
const app = express();
app.use(cors());

db.serialize( () => {

  // if ( !fs.existsSync(dbFile) ) {
    db.run('CREATE TABLE IF NOT EXISTS category (type VARCHAR(20), catego_id INTEGER PRIMARY KEY AUTOINCREMENT, )');
    db.run('INSERT INTO category (type) VALUES (?)', 'Canapé');
    db.run('INSERT INTO category (type) VALUES (?)', 'Téléphone');
    db.run('INSERT INTO category (type) VALUES (?)', 'Fauteuil');
    
    db.run('CREATE TABLE IF NOT EXISTS product (prod_id INTEGER PRIMARY KEY AUTOINCREMENT, prod_name VARCHAR(50), prod_price INTEGER, catego_id INTEGER, FOREIGN KEY (catego_id) REFERENCES category(catego_id) )');
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','CanapA', 20, 1);
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','CanapB', 10, 1);
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','TelA', 30, 2);
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','TelB', 40, 2);
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','FautA', 50, 3);
    db.run('INSERT INTO product (prod_name, prod_price, catego_id) VALUES (?,?,?)','FautB', 60, 3);
  // }

app.get('/', function (req, res) {
  db.all('SELECT * FROM product', function (error, data) {
            res.send(data);
    });
  });
});

db.all('SELECT * FROM product', function (error,data) {
  console.log(data);
});

app.listen(3000, function () {
  console.log('STARTING...');
}); 