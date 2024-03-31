const isStrongPassword = (password) => {
    if (password.length >= 8 && password.toLowerCase().match(/password/i) === null && password !== password.toLowerCase()) {
        return true;
    } else { return false; }
}