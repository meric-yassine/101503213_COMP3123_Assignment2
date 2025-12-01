import Employee from "../models/Employee.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.status(200).json(employees);
  } catch (err) {
    console.error("getAllEmployees error:", err);
    return res.status(500).json({ message: "Failed to fetch employees" });
  }
};

export const createEmployee = async (req, res) => {
  try {
    console.log("➡️ createEmployee body:", req.body);

    const emp = await Employee.create(req.body);

    return res.status(201).json({
      message: "Employee created successfully.",
      employee_id: emp._id,
    });
  } catch (err) {
    console.error("❌ createEmployee error:", err);
    return res.status(400).json({ message: "Failed to create employee" });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { eid } = req.query;

    if (!eid) {
      return res.status(400).json({ message: "Employee id (eid) is required" });
    }

    const deleted = await Employee.findByIdAndDelete(eid);

    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" });
    }

    return res.status(204).send();
  } catch (err) {
    console.error("deleteEmployee error:", err);
    return res.status(400).json({ message: "Failed to delete employee" });
  }
};
