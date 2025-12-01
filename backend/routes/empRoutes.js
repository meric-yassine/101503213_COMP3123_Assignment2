import express from "express";
import {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
} from "../controllers/empController.js";

const router = express.Router();

// GET /api/v1/emp/employees  → list all employees
router.get("/employees", getAllEmployees);

// POST /api/v1/emp/employees  → create new employee
router.post("/employees", createEmployee);

// DELETE /api/v1/emp/employees?eid=...  → delete employee by id
router.delete("/employees", deleteEmployee);

export default router;
