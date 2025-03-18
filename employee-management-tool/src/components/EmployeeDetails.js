import React from 'react';

function EmployeeDetails({ employee }) {
  if (!employee) {
    return <p>No match found.</p>;
  }
  
  return (
    <div className="employee-details">
      <h2>{employee.name}</h2>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Role:</strong> {employee.role}</p>
    </div>
  );
}

export default EmployeeDetails;