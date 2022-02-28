require("dotenv").config();

const express = require("express");
const cors = require("cors");
const EmployeesRoutes = require("./routes/employees-routes");
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());
app.use("/employees", EmployeesRoutes);

app.get("/", (req, res) => {
    res.send(`connected to port ${port}`);
});

app.listen(port);
