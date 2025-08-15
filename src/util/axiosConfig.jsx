import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://bucksbee.onrender.com/api/v1.0",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const excludeEndpoints = [
  "/login",
  "/register",
  "/health",
  "/activate",
  "/status",
];
