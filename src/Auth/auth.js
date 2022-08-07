export default function Auth() {

    const getToken = () => {
        const access_token = JSON.parse(localStorage.getItem('access_token'));
        return access_token;
    }

    const getCSRFToken = () => {
        const CSRF_token = JSON.parse(localStorage.getItem('csrf_token'));
        return CSRF_token;
    }

    const setToken = (res) => {
        const token = res.data.access_token;
        localStorage.setItem('access_token', JSON.stringify(token));
        const _token = res.data._token;
        localStorage.setItem('csrf_token', JSON.stringify(_token));
    }
    
    return {
        setToken,
        getToken,
        getCSRFToken
    }
}