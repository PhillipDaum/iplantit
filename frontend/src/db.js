var ibmdb = require('ibm_db');
var connStr = "DATABASE=bludb;HOSTNAME=9938aec0-8105-433e-8bf9-0fbb7e483086.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;UID=sgk73140;PWD=PM3roaUmXzQEKtZ0;PORT=32459;PROTOCOL=TCPIP;Security=SSL"

function openDB(query) {
    ibmdb.open(connStr, function(err, connection) {
        console.log("opens db2")

        if (err) {
            console.log(err);
            return;
        }
        // GET
        connection.query(query, function(err1, data) {
            if (err1) console.log(err1);
            else console.log(data);
            connection.close(function(err2) {
                if (err2) console.log(err2);
            });
        });
    
    
    });
}

openDB("INSERT INTO GARDENS (GID, UNAME, WIDTH, HEIGHT, TEMPERATURE, HUMIDITY) VALUES ('test2', 'tperson', 5, 6, 80, 50)")
openDB('select * from users')
openDB('select * from gardens')