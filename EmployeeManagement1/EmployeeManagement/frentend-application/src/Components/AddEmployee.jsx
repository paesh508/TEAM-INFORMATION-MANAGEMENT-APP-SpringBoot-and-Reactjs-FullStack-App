import { useState } from "react";
import EmployeeService from "../EmployeeServices/EmployeeService";
import { useNavigate } from 'react-router-dom';
import './AddEmployee.css'

function AddEmployee() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [deptno, setDept] = useState("");

    const navigate = useNavigate();

    const saveEmployee = (event) => {
        event.preventDefault();
        const employee = { id, name, email, gender, deptno };

        console.log(employee);
        EmployeeService.saveEmp(employee)
            .then((response) => {
                console.log(response.data);
            })
            navigate("/employees")
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="employee-form-container">
            <h3 className='employee-form-title'>Add Employee</h3>
            <form>
                <table border="2" className='employee-form-table'>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td><input type="text" name="id" value={id} onChange={(event) => setId(event.target.value)} className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td><input type="text" name="gender" value={gender} onChange={(event) => setGender(event.target.value)} className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td>DeptNo</td>
                            <td><input type="text" name="deptno" value={deptno} onChange={(event) => setDept(event.target.value)} className='employee-form-input'/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><button onClick={saveEmployee}  className='employee-form-button'>Add Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
export default AddEmployee;