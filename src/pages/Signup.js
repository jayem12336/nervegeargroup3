import React, { useState } from 'react'

import firebase from '../utils/firebase'

import { Grid, Paper, Avatar, Button } from '@material-ui/core'
import Textfield from '../components/TextField/Textfield'

export default function Signup() {
    const styles = {
        paperStyle: {
            padding: 20,
            height: '75vh',
            width: 300,
            margin: "40px auto"
        },
        avatarStyle: {
            backgroundColor: '#0047ba',
            height: 100,
            width: 100,
            marginTop: 10,
            marginBottom: 20
        },
        btnStyle: {
            margin: '8px 0',
            marginTop: 30
        },
        textStyle: {
            marginTop: 15
        }
    };

    const [payload, setPayload] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: ''
    })

    const handleChange = (prop) => (e) => {
        setPayload({ ...payload, [prop]: e.target.value })
    }

    const register = (e) => {
        e.preventDefault();

        if (!payload.email || !payload.password || !payload.confirmPassword) {
            alert("Please Fill out the fields")
        }
        else if (payload.password !== payload.confirmPassword) {
            alert("Password does not match")
        }
        else {
            //firebase
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((userCredential) => {
                    // Signed in 
                    //var user = userCredential.user;
                    // ...
                    alert("Register and Signin");
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    alert(errorMessage);
                });
        }
    }

    return (
        <div className="login-container">
            <Grid>
                <Paper elevation={10} style={styles.paperStyle}>
                    <Grid align='center'>
                        <Avatar style={styles.avatarStyle}>
                        </Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <form>
                        <Textfield
                            label='Full Name'
                            placeholder='Lname Fname Mi(optional)'
                            name="fullName"
                            fullWidth
                            onChange={handleChange("fullName")}
                            value={payload.fullName}
                        />
                        <Textfield
                            label='Email'
                            placeholder='Email'
                            name="email"
                            type="name"
                            onChange={handleChange("email")}
                            value={payload.email}
                        />
                        <Textfield
                            label='Password'
                            placeholder='Password'
                            name="password"
                            type='password'
                            fullWidth
                            onChange={handleChange("password")}
                            value={payload.password}
                        />
                        <Textfield
                            label='Confirm Password'
                            placeholder='Confirm Password'
                            name="password"
                            type='password'
                            onChange={handleChange("confirmPassword")}
                            value={payload.confirmPassword}
                        />
                        <Button
                            onClick={register}
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={styles.btnStyle}
                            fullWidth
                        >Sign Up</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}
