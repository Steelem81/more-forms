
import { useState } from 'react';

const MemberForm = props => {
    const initialFormData = {
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    }

    const[fieldValues, setFieldValues] = useState(initialFormData)
    const[errorsOnForm, setErrorsOnForm] = useState([])

    const onChangeHandler = (e) =>{
        setFieldValues({...fieldValues, [e.target.name]: e.target.value});
    };
    
    const createUser = (e) => {
        e.preventDefault();
        const errorList = [];

        if (fieldValues.firstName.length < 2){
            errorList.push("First name must be at least 2 characters");
        };
        if (fieldValues.lastName.length < 2) {
            errorList.push("Last name must be at least 2 characters long");
        };
        if (fieldValues.email.length < 2) {
            errorList.push("Email must be at least 2 characters");
        };
        if (fieldValues.password.length < 6) {
            errorList.push("Password must be at least 6 charactes");
        };
        if (fieldValues.password != fieldValues.confirmPassword){
            errorList.push("Passwords do not match")
        }

        if (errorList.length > 0 ) {
            setErrorsOnForm(errorList);
        } else {
            alert(`Hi ${fieldValues.firstName} ${fieldValues.lastName}, is ${fieldValues.email} your correct email address?`);
            setFieldValues(initialFormData);
        };
    };

    return (
        <>
            <div  class="container col-3 p-3  bg-dark text-light">
                <form onSubmit = { createUser }>
                    {
                        errorsOnForm.map((err, i ) => (
                            <p key={i}>{err}</p>
                        ))
                    }
                    <div class='mb-3'>
                        <label class="form-label">First Name: </label>
                        <input type="text" class="form-control" name="firstName" value={ fieldValues.firstName } onChange={ onChangeHandler }/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name: </label>
                        <input type="text" class="form-control" name="lastName" value={ fieldValues.lastName } onChange={ onChangeHandler }/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email: </label>
                        <input type="email" class="form-control" name="email" value={ fieldValues.email } onChange={ onChangeHandler  }/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password: </label>
                        <input type="password" class="form-control" name="password" value={ fieldValues.password } onChange={ onChangeHandler }/>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Confirm Password: </label>
                        <input type="password" class="form-control" name="confirmPassword" value= { fieldValues.confirmPassword } onChange={ onChangeHandler }/>
                    </div>
                    <input type="submit" class = "btn btn-primary " value="Create Account"/>  
                </form>
            </div>
        </>
    )
}

export default MemberForm;
