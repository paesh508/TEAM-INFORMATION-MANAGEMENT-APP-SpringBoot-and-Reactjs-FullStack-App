import React, { useState, useEffect } from 'react';
import EmployeeService from '../EmployeeServices/EmployeeService';
import { Link } from 'react-router-dom';
import './ListAllEmployee.css'

const ListAllEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        getAllEmployeeDetails();
    }, []);
        const getAllEmployeeDetails = () => {
            EmployeeService.getAllEmp()
                .then((response) => {
                    setEmployees(response.data);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        const deleteRecord = (employeeid) =>{
            EmployeeService.deleteEmp(employeeid)
            .then(response =>{
                console.log(response.data)
                getAllEmployeeDetails();
            })
            
            
            .catch(error => {
                console.log(error+"error getting");
            });
            };


    return (
        <div className='employee-list-container'>
            <h3 className='employee-font-title'>List Employee Details</h3>
            <table border="2" className='employee-list-table'>
                <thead>
                    <tr>
                        <th className='employee-list-table'>EmployeeId</th>
                        <th className='employee-list-table'>EmployeeName</th>
                        <th className='employee-list-table'>EmployeeEmail</th>
                        <th className='employee-list-table'>EmployeeGender</th>
                        <th className='employee-list-table'>EmployeeDeptNo</th>
                        <th className='employee-list-table'>Update</th>
                        <th className='employee-list-table'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td  className='employee-list-label'>{employee.id}</td>
                            <td  className='employee-list-label'>{employee.name}</td>
                            <td  className='employee-list-label'>{employee.email}</td>
                            <td  className='employee-list-label'>{employee.gender}</td>
                            <td  className='employee-list-label'>{employee.deptno}</td>
                            <td>
                                <Link to ={`/edit-employee/${employee.id}`} className='employee-list-table'>Update</Link> 
                            </td>
                            <td>
                                <button onClick={()=>{deleteRecord(employee.id)}} className='employee-list-table'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAllEmployee;
