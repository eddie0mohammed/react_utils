import React from 'react';

import styles from './form.module.scss';

import {Formik} from 'formik';

import * as Yup from 'yup';


import Error from '../ErrorComponent/ErrorComponent';



const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Must have a min of 2 characters')
                    .max(20, 'Max 20 characters')
                    .required('Must enter first name'),
    lastName: Yup.string().min(2, 'Must have a min of 2 characters')
                    .max(20, 'Max 20 characters')
                    .required('Must enter last name'),
    email: Yup.string().email('Must be a valid email address')
                    .required('Must enter an email'),
    password: Yup.string().min(8, 'Password is too short - should be 8 chars minimum.')
                    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                    .required('Password required'),
    confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
                    .required('Confirm Password')
})



class Form extends React.Component{

    

    render(){

        return (

            <div className={styles.container}>


                <div className={styles.formContainer}>
                
                <h1 className={styles.formContainer__header}>Create Account</h1>

                <Formik
                    initialValues = {{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''

                    }}

                    //validation
                    validationSchema={validationSchema}

                    //form submission
                    onSubmit={ (values, {setSubmitting, resetForm}) => {

                        setSubmitting(true);
                        alert('Form Submitted');
    

                        //form submitted => what actions to take

                        resetForm();
                        setSubmitting(false);
                    } } 
                >
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (

                            <form className={styles.form} onSubmit={handleSubmit}>
                                {/* {JSON.stringify(values)} */}

                                <div className={styles.form__row}>

                                    <label htmlFor="firstName" className={styles.form__label}>First Name</label>

                                    <input type="text" className={`${styles.form__input} ${touched.firstName && errors.firstName ? `${styles.error}` : '' }`} name="firstName" onChange={handleChange} onBlur={handleBlur} value={values.firstName}/>

                                    <Error touched={touched.firstName} message={errors.firstName}/>
                                    
                                </div>

                                <div className={styles.form__row}>

                                    <label htmlFor="lastName" className={styles.form__label}>Last Name</label>

                                    <input type="text" className={`${styles.form__input} ${touched.lastName && errors.lastName ? `${styles.error}` : '' }`} name="lastName" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>

                                    <Error touched={touched.lastName} message={errors.lastName}/>

                                </div>

                                <div className={styles.form__row}>

                                    <label htmlFor="email" className={styles.form__label}>Email</label>

                                    <input type="email" className={`${styles.form__input} ${touched.email && errors.email ? `${styles.error}` : '' }`} name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                    
                                    <Error touched={touched.email} message={errors.email}/>
                                    

                                </div>

                                <div className={styles.form__row}>

                                    <label htmlFor="password" className={styles.form__label}>Password</label>

                                    <input type="password" className={`${styles.form__input} ${touched.password && errors.password ? `${styles.error}` : '' }`} name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>

                                    <Error touched={touched.password} message={errors.password}/>

                                </div>
                                
                                <div className={styles.form__row}>

                                    <label htmlFor="confirmPassword" className={styles.form__label}>Confirm Password</label>

                                    <input type="password" className={`${styles.form__input} ${touched.confirmPassword && errors.confirmPassword ? `${styles.error}` : '' }`} name="confirmPassword" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>

                                    <Error touched={touched.confirmPassword} message={errors.confirmPassword}/>

                                </div>

                                <input type="submit" value="Submit" className={styles.submit} disabled={isSubmitting}/>
                                

                            </form>
                    )}
                </Formik>
                
                
                </div>


            </div>
        )
    }
}

export default Form;

