import { useEffect, useState } from "react"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const useAuth = () => {
    const [userToken, setUserToken] = useState(null);
    const [user, setUser] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUserToken(codeResponse?.access_token)
            localStorage.setItem('access_token', codeResponse?.access_token);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        setUserToken(localStorage.getItem('access_token'));
    }, [])

    useEffect(
        () => {
            console.log(userToken);
            if (userToken) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userToken}`, {
                        headers: {
                            Authorization: `Bearer ${userToken}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setUser(res.data);
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
    };

    return [user, login, logout];
}

export default useAuth;