import api from "./client";

export const getEmployees = () => api.get("/emp/employees");

export const deleteEmployee = (id) =>
  api.delete("/emp/employees", { params: { eid: id } });
