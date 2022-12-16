import axiosInstance from "../../config/axios-config.js";

const validateUserLoginInfo = ({ username, password, role }) => {
    const errors = {};
  
    const checkWhetherUserNoHasAllDigits = (username) => {
        for(let idx in username) {
            if(username.charCodeAt(idx) < 48 || username.charCodeAt(idx) > 57) {
                return false;
            }
        }

        return true;
    };

    switch (role) {
        case "employee":
            if (!username.trim()) {
                errors.username = 'Emp No is required';
            }

            break;
        case "admin":
            if (!username.trim()) {
                errors.username = 'Admin Emp No is required';
            }

            break;
        default :
            errors.signInAvailable = "SignIn is only available from either employee side or admin side"
    };
    
    if (!password) {
        errors.password = 'Password is required';
    } 

    return errors;
};

const handleUserLogin = async(route, user, navigate, setErrors) => {
    try {
        const res = await axiosInstance.post(route, user);

        if (res.status == 202) {
            const data = await res.data;
            navigate("/employees");
        }
    } catch (err) {
        if (err.response && err.response.status === 401) {
            setErrors({ password: "Entered either wrong emp No or password" });
        }
    }
}

export { validateUserLoginInfo, handleUserLogin };