const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const { urlencoded } = require("body-parser");

// Create connection
const db = mysql.createConnection({
  host: "remotemysql.com",
  user: "aFcAXZ9CCM",
  password: "Tpe2cPUHk0",
  database: "aFcAXZ9CCM",
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

app.get("/api/getBookings", (req, res) => {
  const sqlSelect = "SELECT name, email_address, street_address, city, state, zip_code, booking_type, DATE_FORMAT(booking_date, '%M %e, %Y') booking_date, TIME_FORMAT(booking_time, '%h:%i %p') booking_time FROM bookings ORDER BY DATE_FORMAT(booking_date, '%Y-%m-%d') ASC";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
})

app.post("/api/createBooking", (req, res) => {
  const customerName = req.body.customerName;
  const emailAddress = req.body.emailAddress;
  const streetAddress = req.body.streetAddress;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const bookingType = req.body.bookingType;
  const bookingDate = req.body.bookingDate;
  const bookingTime = req.body.bookingTime;
  const sqlInsert =
    "INSERT INTO bookings (name, email_address, street_address, city, state, zip_code, booking_type, booking_date, booking_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert,[customerName, emailAddress, streetAddress, city, state, zipCode, bookingType, bookingDate, bookingTime ],
    (err, result) => {
        res.send(result);
    }
  );
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
