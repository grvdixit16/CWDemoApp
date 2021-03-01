import React from 'react';
import axios from 'axios';

const API_URL = "http://localhost:59263/api/";


export const EmployeeService = {
  GetAllUsers,
  AddEmployee,
  updateEmployee,
  deleteEmployee
};

async function GetAllUsers() {
  try {
    return await axios.get(API_URL + "employee").then((result) => result.data);
  } catch (error) {
    console.log("error", error);
  }
}

async function AddEmployee(user) {
  try {
    return await axios.post(`${API_URL}/Employee/SaveEmployee`, user).then((response)=>response.data);
  } catch (error) {
    console.log("error", error);
  }
}

async function updateEmployee(user) {
  try {
    return await axios.put(`${API_URL}/Employee/UpdateEmployee`, user).then((response)=>response.data);
  } catch (error) {
    console.log("error", error);
  }
}

async function deleteEmployee(userId) {
  try {
    return await axios.delete(`${API_URL}/Employee/Delete/${userId}`).then((response)=>response.data);
  } catch (error) {
    console.log(error);
  }
}