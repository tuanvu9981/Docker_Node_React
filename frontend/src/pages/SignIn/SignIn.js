import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Divider,
    Box,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';

import { GoogleLogin, GoogleLogout } from 'react-google-login';

const TwoButtonOneLine = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 370,
    marginTop: "4%"
}

const ButtonOption = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: 100,
    textTransform: 'none',
}

const SignIn = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const responseGoogle = (response) => {
        console.log(response);
        // if (response.profileObject) {
        //     setIsSignedIn(true);
        // } else setIsSignedIn(false);
    }

    const logout = () => {
        setIsSignedIn(false);
    }

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginX: "40%",
                marginY: "5%",
                maxWidth: 400
            }}
        >
            <CardContent>

                <Typography
                    textTransform="none"
                    variant='h5'
                    fontWeight="bold"
                    fontSize="18.5px"
                    sx={{ marginBottom: "2%" }}
                >
                    Username or Email
                </Typography>

                <TextField
                    required
                    id="username-or-email"
                    label="Username or Email"
                    sx={{ width: 370 }}
                />

                <Typography
                    textTransform="none"
                    variant='h5'
                    fontWeight="bold"
                    fontSize="18.5px"
                    sx={{ marginBottom: "2%", marginTop: "12%" }}
                >
                    Password
                </Typography>

                <TextField
                    required
                    id="password"
                    label="Password"
                    sx={{ width: 370, marginBottom: "8%" }}
                />

                <Button
                    variant='contained'
                    color='info'
                    sx={{ marginX: "35%", width: 100 }}
                >
                    Sign In
                </Button>

                <Divider sx={{ borderBottomWidth: 1, marginTop: "8%", width: 370, background: 'black' }} />

                <Typography
                    textTransform="none"
                    variant='h5'
                    fontWeight="bold"
                    fontSize="18.5px"
                    sx={{ marginBottom: "2%", marginTop: "3%" }}
                >
                    Or Sign In With
                </Typography>

                <Box sx={TwoButtonOneLine}>
                    <Button
                        variant='outlined'
                        color='success'
                        sx={ButtonOption}
                    >
                        <LockIcon />
                        <Typography fontSize="13.5px">KeyCloak</Typography>
                    </Button>

                    {/* <Button
                        variant='outlined'
                        color='warning'
                        sx={ButtonOption}
                    >
                        <GoogleIcon />
                        <Typography fontSize="13.5px">Google</Typography>

                    </Button> */}

                    <GoogleLogin
                        clientId='248415750301-rai3l6nvlo6jq65nvrr4btpph4uhkdpt.apps.googleusercontent.com'
                        buttonText='Google'
                        cookiePolicy={"single_host_origin"}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    >
                    </GoogleLogin>

                    <GoogleLogout
                        clientId='248415750301-rai3l6nvlo6jq65nvrr4btpph4uhkdpt.apps.googleusercontent.com'
                        buttonText='Logout'
                        onLogoutSuccess={logout}
                    >

                    </GoogleLogout>


                    <Button
                        variant='outlined'
                        color='info'
                        sx={ButtonOption}
                    >
                        <FacebookIcon />
                        <Typography fontSize="13.5px">Facebook</Typography>
                    </Button>
                </Box>

                <Divider sx={{ borderBottomWidth: 1, marginTop: "8%", width: 370, background: 'black' }} />

                <Box sx={TwoButtonOneLine}>
                    <Typography
                        fontWeight="bold"
                        color="green"
                    >
                        Forgot your password?
                    </Typography>

                    <Typography
                        fontWeight="bold"
                        color="green"
                    >
                        Register new account
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SignIn;