const express = require('express')
const app = express();
const port = 5000;
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const sessionstorage = require('sessionstorage');

var ibmdb = require('ibm_db');
var connStr = "DATABASE=bludb;HOSTNAME=9938aec0-8105-433e-8bf9-0fbb7e483086.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud;UID=sgk73140;PWD=PM3roaUmXzQEKtZ0;PORT=32459;PROTOCOL=TCPIP;Security=SSL"

uname = '';
app.get("/user-home", (req, res) => {
    ibmdb.open(connStr, function (err, connection) {
        console.log("opens db2")

        if (err) {
            console.log(err);
            return;
        }
        // GET
        connection.query("SELECT * FROM USERS", function (err, data) {
            console.log(data)
            uname = data[0]['UNAME']

            connection.query(`SELECT * FROM GARDENS WHERE UNAME = '${uname}'`, function (err1, data) {
                if (err1) { console.log(err1); }
                else {
                    console.log(data[0]['GID'])
                    res.header("Access-Control-Allow-Origin", "*");
                    gardensForUser = []
                    for (garden in data) {
                        gardensForUser.push(data[garden])
                    }
                    res.send({ gardens: gardensForUser });
                    console.log(data)
                }
                connection.close(function (err2) {
                    if (err2) console.log(err2);
                });
            });
        });

    });
})

newGarden = {};

app.post("/add-garden", jsonParser, (req, res) => {
    console.log("Requesting...")
    console.log(req.body)
    ibmdb.open(connStr, function (err, connection) {
        connection.query(`INSERT INTO GARDENS (GID, UNAME, WIDTH, HEIGHT, TEMPERATURE, HUMIDITY) VALUES ('${req.body["gname"]}', '${uname}', ${req.body["width"]}, ${req.body["height"]}, 12, 12)`).then(console.log("added"));

    });
});

app.get("/garden-editor", (req, res) => {
    res.send({ gardens: newGarden })
})

app.listen(port, () => console.log(`Listening ${port}...`));
