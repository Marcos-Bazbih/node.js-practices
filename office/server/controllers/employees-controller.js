const GetEmployees = (req, res) => {
    res.send("get");
};

const GetEmployeeById = (req, res) => {
    res.send("getById");
};

const AddEmployee = (req, res) => {
    res.send("post");
};

const UpdateEmployee = (req, res) => {
    res.send("put");
};

const DeleteEmployee = (req, res) => {
    res.send("delete");
};

module.exports = { GetEmployees, GetEmployeeById, AddEmployee, UpdateEmployee, DeleteEmployee };