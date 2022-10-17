/*
This file is for testing connection with ibm db2
Step 1. Install node
Step 2. Use npm to install db2 module
Step 3. Run node js/experiment.js to see if connection is successful
*/
var ibmdb = require('ibm_db');
var connStr = "DATABASE=bludb;HOSTNAME=9938aec0-8105-433e-8bf9-0fbb7e483086.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;UID=sgk73140;PWD=PM3roaUmXzQEKtZ0;PORT=32459;PROTOCOL=TCPIP;Security=SSL"
ibmdb.open(connStr, function(err, connection) {
    console.log("opens db2")

    if (err) {
        console.log(err);
        return;
    }

    // GET
    connection.query("DROP TABLE IF EXISTS users;CREATE TABLE users (fname char(10) NOT NULL,lname char(10) NOT NULL,uname char(10) NOT NULL,PRIMARY KEY (uname));", function(err1, data) {
        if (err1) console.log(err1);
        else console.log(data);
        connection.close(function(err2) {
            if (err2) console.log(err2);
        });
    });


});