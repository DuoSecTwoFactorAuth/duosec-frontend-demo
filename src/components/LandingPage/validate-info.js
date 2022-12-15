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
        case "student":
            if (!username.trim()) {
                errors.username = 'GR/PR No is required';
            } else if (!checkWhetherUserNoHasAllDigits(username)) {
                errors.username = 'Enter a valid GR/PR No which contain only numbers';
            }

            break;
        case "teacher":
        case "admin":
            if (!username.trim()) {
                errors.username = 'Emp No is required';
            } else if (!checkWhetherUserNoHasAllDigits(username)) {
                errors.username = 'Enter a valid Emp No which contains only numbers';
            }

            break;
        default :
            errors.signInAvailable = "SignIn is only available from either student side, teacher side or admin side"
    };
    
    if (!password) {
        errors.password = 'Password is required';
    } 

    return errors;
};

export default validateUserLoginInfo;