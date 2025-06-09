const { Employee } = require("../models"); // this points to models/index.js

// get all

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll({});
    res.status(200).json({ success: true, employees });
    console.log("getEmployees ~ employees:", employees);
  } catch (error) {
    console.log("getEmployees ~ error:", error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

//create

const createEmployee = async (req, res) => {
  try {
    const { name, email, designation, salary } = req.body;

    const newEmployee = await Employee.create({
      name,
      email,
      designation,
      salary,
    });

    // await createEmployee.save();
    console.log("🚀 ~ createEmployee ~ newEmployee:", newEmployee);

    res.status(201).json({ success: true, newEmployee });
  } catch (error) {
    console.log("🚀 ~ createEmployee ~ error:", error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};
// update by id

const updateEmployee = async (req, res) => {
  try {
    const updateEmployee = await Employee.findOne({
      where: { u_id: req.params.u_id },
    });

    if (!updateEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "employee not found" });
    }

    const update = await Employee.update(req.body, {
      where: { u_id: req.params.u_id },
    });

    console.log("🚀 ~ updateEmployee ~ update:", updateEmployee);
    res.status(201).json({ success: true, update });
  } catch (error) {
    console.log("🚀 ~ updateEmployee ~ error:", error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

//delete by id

const deleteEmployee = async (req, res) => {
  try {
    const deleteEmployee = await Employee.findOne({
      where: { u_id: req.params.u_id },
    });

    if (!deleteEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "employee not found" });
    }
    res.status(201).json({ success: true, deleteEmployee });
  } catch (error) {
    console.log("🚀 ~ deleteEmployee ~ error:", error);
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};

module.exports.employeeController = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
