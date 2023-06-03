import { useEffect, useState } from "react"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const useAuth = () => {
    const [userToken, setUserToken] = useState(localStorage.getItem('access_token'));
    const [user, setUser] = useState(null);
    const [jwtToken, setJWTToken] = useState(null)

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUserToken(codeResponse?.access_token)
            localStorage.setItem('access_token', codeResponse?.access_token);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (userToken) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`, {
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: 'application/json'
                        }
                    })
                    .then(async (res) => {
                        setUser(res.data);
                        console.log(res.data);
                        const tokenResponse = await axios.post('http://localhost:4000/login', {
                            email: res.data.email
                        })
                        const token = tokenResponse.data;
                        setJWTToken(token);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ userToken ]
    );
    const logout = () => {
        googleLogout();
        localStorage.removeItem('access_token');
        setUser(null);
        setUserToken(null);
        setJWTToken(null);
    };

    return {user, login, logout,jwtToken};
}

export default useAuth;