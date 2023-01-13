import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Checkbox, FormControlLabel, FormGroup, Snackbar } from '@mui/material'
import TextField from '../../components/compound/FormsUI/TextFeild'
import { Link, useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import MuiAlert from '@mui/material/Alert';
import styles from './index.module.scss'

const initailValue = {
    email: "",
    password: "",
}

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
        .required('No Password Provided')
        .min(8, "Password is too short - should be 8 chars minimum")
        .matches(/[a-zA-z]/, "Password can must have at least one letters.")
})

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
    const navigate = useNavigate()
    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1500 });
        console.log(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    return (
        <div className={styles.Container} data-aos="fade-up">
            <Formik initialValues={initailValue} validationSchema={validationSchema} onSubmit={values => {
                let getUser = JSON.parse(localStorage.getItem('user'))
                if (getUser.email === values.email) {
                    if (getUser.password === values.password){
                        navigate('/');
                    }
                } else {
                    setOpenSnackbar(true);
                }
            }}>
                <Form className={styles.loginForm}>
                    <span className={styles.title}>Login</span>
                    <TextField name="email" label="E-Mail" />
                    <TextField name="password" label="Password" />
                    <div className={styles.Remember_Forget}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Remember me" className={styles.label} />
                        </FormGroup>
                        <Link to='/register'>Forgot password?</Link>
                    </div>
                    <Button className={styles.submit} type="submit" >Log In</Button>
                    <div className={styles.or}>
                        <span></span>
                        <span>OR</span>
                        <span></span>
                    </div>
                    <div className={styles.socail}>
                        <button>
                            <img src="./assets/images/facebook-icon.png" alt="" />
                            <span>Facebook</span>
                        </button>
                        <button>
                            <img src="./assets/images/google-icon.png" alt="" />
                            <span>Google</span>
                        </button>
                    </div>
                    <div className={styles.have_Account}>
                        <span>Don't Have an Account ?</span>
                        <Link to='/register'>Sign up now</Link>
                    </div>
                </Form>
            </Formik>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
                    User Not Found !
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login