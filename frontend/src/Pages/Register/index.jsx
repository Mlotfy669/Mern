import React, { useState, useEffect, useRef } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import TextField from '../../components/compound/FormsUI/TextFeild'
import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'

const initailValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email("Invalid Email").required("Required"),
    phone: Yup.number().integer().typeError('please enter a valid phone number').required('Required'),
    password: Yup.string()
        .required('No Password Provided')
        .min(8, "Password is too short - should be 8 chars minimum")
        .matches(/[a-zA-z]/, "Password can must have at least one letters."),
    confirmPassword: Yup.string().required('No Password Provided').when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        )
    })
})

const Register = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const getUser = localStorage.getItem('user')
        console.log(JSON.parse(getUser))
        if (JSON.parse(getUser)) {
            navigate('/login')
        }
    }, [])
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    const [openDilog, setOpenDilog] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpenDilog(true);
        setScroll(scrollType);
    };
    const handleCloseDilog = () => {
        setOpenDilog(false);
    };
    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (openDilog) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openDilog]);

    return (
        <div className={styles.Container} data-aos="fade-up">
            <Formik initialValues={initailValue} validationSchema={validationSchema} onSubmit={values => {
                console.log(values)
                localStorage.setItem('user', JSON.stringify(values))
                navigate('/login')
            }}>
                <Form className={styles.registerForm}>
                    <span className={styles.title}>Register</span>
                    <TextField name="firstName" label="First Name" />
                    <TextField name="lastName" label="Last Name" />
                    <TextField name="email" label="E-Mail" />
                    <TextField name="phone" label="Phone" />
                    <TextField name="password" label="Paswword" />
                    <TextField name="confirmPassword" label="Confirm Password" />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="I agree to terms & Policy." className={styles.label} onClick={handleClickOpen('paper')} />
                    </FormGroup>
                    <Button className={styles.submit} type="submit">Register</Button>
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
                        <span>Already have an account?</span>
                        <Link to='/login'>Log in</Link>
                    </div>
                </Form>
            </Formik>
            <Dialog
                open={openDilog}
                onClose={handleCloseDilog}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Our Terms & Conditions</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {[...new Array(40)].map(() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        ).join('\n')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Register