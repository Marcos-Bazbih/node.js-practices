const EmployeesRoutes = require("express").Router();
const { GetEmployees, GetEmployeeById, AddEmployee, UpdateEmployee, DeleteEmployee } = require("../controllers/employees-controller");

EmployeesRoutes.get("/",GetEmployees);
EmployeesRoutes.get("/:id",GetEmployeeById);
EmployeesRoutes.post("/",AddEmployee);
EmployeesRoutes.put("/:id",UpdateEmployee);
EmployeesRoutes.delete("/:id",DeleteEmployee);

module.exports = EmployeesRoutes;