import axios from 'axios';
const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8086/api/v1/employees";

class EmployeeService {
    saveEmp(employee) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }
    getAllEmp(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }
    updateEmployee(employee,employeeid){
        return axios.put(EMPLOYEE_BASE_REST_API_URL +"/" +employeeid, employee)
    }
    getOneRecord(employeeid) {
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + employeeid);
      }
      deleteEmp(employeeid) {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + employeeid);
      }

}

export default new EmployeeService();
