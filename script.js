let regist = {email: "", password: ""};

function handleChange(name, value) {
    regist[name] = value;
    console.log(regist);
};

function handleSubmit() {
    alert(`email: ${regist.email}, password: ${regist.password}`);
};