import React, { useState } from 'react';

function AddEmployeeForm({ onAdd }) {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!department.trim()) newErrors.department = 'Department is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({ name, department, role });
    setName('');
    setDepartment('');
    setRole('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        {errors.department && <p className="error">{errors.department}</p>}
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployeeForm;