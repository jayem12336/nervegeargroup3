import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { Grid, Paper, Avatar, Button, Typography} from '@material-ui/core'
import Textfield from '../components/TextField/Textfield'

import firebase from '../utils/firebase'

export default function Login() {
    const styles = {
        paperStyle: {
            padding: 20,
            height: '70vh',
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
            marginTop: 20
        },
        textStyle: {
            fontSize: 25
        },
        margin: {
            marginTop: 10
        }
    };

    const history = useHistory();

    const [payload, setPayload] = useState({
        email: '',
        password: ''
    })

    const handleChange = (prop) => (e) => {
        setPayload({ ...payload, [prop]: e.target.value })
    }

    const login = (e) => {
        e.preventDefault();

        if (!payload.email || !payload.password) {
            alert("Please Fill out the fields")
        }
        else {
            if (!payload.email || !payload.password) {
                alert("Please Fill out the fields")
            }
            else {
                //firebase

                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then((userCredential) => {
                        // Signed in 
                        //var user = userCredential.user;
                        // ...
                        alert("Signin");
                    })
                    .catch((error) => {
                        //var errorCode = error.code;
                        var errorMessage = error.message;
                        // ..
                        alert(errorMessage);
                    });
            }
        }
    }

    return (
        <div className="login-container">
            <Grid>
                <Paper elevation={10} style={styles.paperStyle}>
                    <Grid align='center'>
                        <Avatar style={styles.avatarStyle}>
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <form>
                        <Textfield
                            label='Email'
                            placeholder='Email'
                            name="email"
                            type="name"
                            onChange={handleChange("email")}
                            value={payload.email}
                            fullWidth
                        />
                        <Textfield
                            label='Password'
                            placeholder='Password'
                            name="password"
                            type="password"
                            onChange={handleChange("password")}
                            value={payload.password}
                            style={styles.margin}
                            fullWidth
                        />
                        <Button
                            onClick={login}
                            type='submit'
                            color='secondary'
                            variant="contained"
                            style={styles.btnStyle}
                            fullWidth
                        >Sign in</Button>
                        <Typography align="center" style={styles.textStyle}>
                            or
                        </Typography>
                        <Button
                            onClick={() => { history.push('/signup') }}
                            type='submit'
                            color='primary'
                            variant="contained"
                            style={styles.margin}
                            fullWidth
                        >Sign Up</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}
