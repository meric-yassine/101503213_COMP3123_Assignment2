import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { login } from "../api/userApi";

export default function LoginPage() {
  const [form, setForm] = useState({ emailOrUsername: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await login({
        email: form.emailOrUsername, // backend accepts email OR username field
        password: form.password,
      });
      const token = res.data.jwt_token;
      if (token) {
        localStorage.setItem("token", token);
      }
      navigate("/employees");
    } catch (err) {
      setError("Invalid username/email or password");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email or Username"
          name="emailOrUsername"
          value={form.emailOrUsername}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don&apos;t have an account?{" "}
        <Link to="/signup">Sign up</Link>
      </Typography>
    </Container>
  );
}
