export const getEmployeeFields = (employees,projection) => {
    const employeeFields = {}; // Initialize an object to store arrays of each field
    Object.keys(projection).forEach(field => {
        employeeFields[field] = []; // Initialize an empty array for each field
    });
    employees.forEach(employee => {
        Object.keys(projection).forEach(field => {
            employeeFields[field].push(employee[field]); // Push the value of each field for each employee into the corresponding array
        });
    });
    return employeeFields;
}