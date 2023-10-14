import axios from 'axios';
const EMP_BASE_URL="http://localhost:8080/api/v1/emps";
class EmpServices{


    getEmps(){

        return axios.get(EMP_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMP_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMP_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMP_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMP_BASE_URL + '/' + employeeId);
    }

    
}
export default new EmpServices();