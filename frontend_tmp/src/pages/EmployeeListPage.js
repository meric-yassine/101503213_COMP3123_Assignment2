import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getEmployees, deleteEmployee } from "../api/employeeApi";
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Paper
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EmployeeListPage() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const mutation = useMutation({
    mutationFn: (id) => deleteEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["employees"]);
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Delete this employee?")) {
      mutation.mutate(id);
    }
  };

  const employees = data?.data || [];

  if (isLoading) return <Typography>Loading employees...</Typography>;
  if (isError) return <Typography color="error">Failed to load employees.</Typography>;

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Employees
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Date of Joining</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((emp) => (
            <TableRow key={emp._id}>
              <TableCell>{emp.first_name} {emp.last_name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.position}</TableCell>
              <TableCell>{emp.department}</TableCell>
              <TableCell>
                {emp.date_of_joining
                  ? new Date(emp.date_of_joining).toLocaleDateString()
                  : "-"}
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(emp._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {employees.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>No employees found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}
