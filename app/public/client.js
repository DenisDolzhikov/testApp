"use strict";

const showNotification = (message) => {
    
}

const signIn = async () => {
    const form = document.form.signin;
    let username = form.elements.username.value;
    let password = form.elements.password.value;

    const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            username,
            password
        })
    });

    if (response.ok === true) {

    }
}