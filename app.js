var faker = require('faker');
var mysql = require('mysql');

//       Root User: gunavata
//   Database Name: c9

// function generateAddress() {
//     console.log(faker.address.streetAddress());
//     console.log(faker.address.city());
//     console.log(faker.address.state());
//     console.log(' ')
// }

// for(i = 0; i < 5; i++) {
// generateAddress();
// }

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'gunavata',
    database: 'join_us'
})

// SELECTING DATA
// var q = 'SELECT * FROM users';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });

// INSERTING HARDCODED DATA
// var w = 'INSERT INTO users (email) VALUES ("wyatt_the_dog@gmail.com")';
// connection.query(w, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });

// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// console.log(end_result.sql)

var data =[];
for(var i = 0; i < 500; i++) {
data.push([
    faker.internet.email(),
    faker.date.past()
]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
    if (err) throw err;
    console.log(result);
})

// console.log(data);

connection.end();

