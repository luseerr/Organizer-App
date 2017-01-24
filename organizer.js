const main = document.getElementsByClassName('main')[0];

function goToMain(){
    const lockScr = document.getElementsByClassName('lockScreen')[0];
    lockScr.style.display = 'none';
    main.style.visibility = 'visible';
}


function doSth (event){
    const x = event.keyCode;
    if(x === 13){
        const loginBut = document.getElementsByClassName('loginBut')[0];
        loginBut.click();
    };
};

function logIn (){
    const user = document.getElementById('userName');
    const pass = document.getElementById('password');
    console.log(user.value);
    console.log(pass.value);
    if(user.value === 'kochamAlusie' && pass.value === '29112014'){
        console.log('test');
    } else {
        alert('Wrong user name or passwod. Try again.');
    };
};