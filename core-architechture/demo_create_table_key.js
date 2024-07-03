var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});

// Insert Record in table
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

// Insert Customer Data in table
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
    ["Hannah", "Mountain 21"],
    ["Michael", "Valley 345"],
    ["Sandy", "Ocean blvd 2"],
    ["Betty", "Green Grass 1"],
    ["Richard", "Sky st 331"],
    ["Susan", "One way 98"],
    ["Vicky", "Yellow Garden 2"],
    ["Ben", "Park Lane 38"],
    ["William", "Central st 954"],
    ["Chuck", "Main Road 989"],
    ["Viola", "Sideway 1633"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

// Get Inserted ID
con.connect(function (err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

// Selecting from table
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// Selecting Columns
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// Selecting Field Objects
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
  });
});

// Select with a filter
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// Wildcard Characters
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// Escaping Query Values

var adr = "Mountain 21";
var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
var sql1 = "SELECT * FROM customers WHERE address = ?";
var sql2 = "SELECT * FROM customers WHERE name = ? OR address = ?";
var name = "Amy";

con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});

con.query(sql1, [adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

con.query(sql2, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});

// Sorting data
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// Sort ORDER BY DESC
con.connect(function (err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//Delete Record
con.connect(function (err) {
  if (err) throw err;
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});


