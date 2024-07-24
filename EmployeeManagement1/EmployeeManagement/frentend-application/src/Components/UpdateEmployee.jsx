import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../EmployeeServices/EmployeeService';
import './AddEmployee.css'

const UpdateEmployee = () => {
    const { id } = useParams(); // Destructure the id from useParams
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [deptno, setDeptno] = useState("");

    const navigate = useNavigate();

    const updateEmployeeOne = (event) => {
        event.preventDefault();
        const employee = {name, email, gender, deptno }; // Create an employee object with correct structure

        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                console.log(response.data);
                navigate('/employee')
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        EmployeeService.getOneRecord(id)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setGender(response.data.gender);
                setDeptno(response.data.deptno);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="employee-form-container">
            <h3 className='employee-form-title'>Update Employee</h3>
            <form>
                <table border="2" className='employee-form-table'>
                    <tbody>
                        <tr>
                            <td>Employee Name:</td>
                            <td><input type="text" value={name} onChange={(event) => setName(event.target.value)} name="name" className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td>Employee Email</td>
                            <td><input type="text" value={email} onChange={(event) => setEmail(event.target.value)} name="email" className='employee-form-input' /></td>
                        </tr>
                        <tr>
                            <td>Employee Gender</td>
                            <td><input type="text" value={gender} onChange={(event) => setGender(event.target.value)} name="gender" className='employee-form-input' /></td>
                        </tr>
                        <tr>
                            <td>Employee DeptNo</td>
                            <td><input type="text" value={deptno} onChange={(event) => setDeptno(event.target.value)} name="deptno" className='employee-form-input' /></td>
                        </tr>
                        <tr>
                            <td><button onClick={updateEmployeeOne}  className='employee-form-button'>Update</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateEmployee;
