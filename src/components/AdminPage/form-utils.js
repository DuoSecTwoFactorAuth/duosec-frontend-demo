import axios from "../../config/axios-config.js";

const validateEmpDetails = (values) => {
    const errors = {};
        
    if (!values.employeeId) {
        errors.employeeId = 'Employee Id is required';
    } 
    
    if (!values.name) {
        errors.name = 'Employee Name is required';
    }
    
    if (!values.emailId) {
        errors.emailId = 'Employee Email Id is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)) {
        errors.emailId = 'Invalid email id is provided';
    };

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Employee Phone No is required';
    } 

    return errors;
};

const addEmployee = async (route, employeeDetails, clearFields, setEmployeesDetails, toast) => {
    try {
        console.log(employeeDetails)
        const res = await axios.post(route, employeeDetails);

        if (res.status === 202) {
            alert("Your employee has been successfully added!")
            // toast.success("Your employee has been successfully added", {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });

            clearFields({
                employeeId: "",
                name: "",
                emailId: "",
                phoneNumber: ""
            });

            setEmployeesDetails((previousState) => {
                const empDetails = JSON.parse(JSON.stringify(employeeDetails));
                previousState.push(employeeDetails);
                return previousState;
            })
        }
    } catch (err) {
        console.error(err);
    }
}

export { validateEmpDetails, addEmployee };