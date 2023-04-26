async function login() {
    const username =  document.getElementById("username").value
    const password =  document.getElementById("password").value

    const expectedUsername = 'UryybArjHfre'
    const expectedPassword = 'GuvfVfCnffjbeq'

    if( rot13(username) == expectedUsername) {
        if (rot13(password) == expectedPassword) {
            redirectFunction();
        }
        else {
            document.getElementById("result").innerHTML = "Incorrect Password!";
        }
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect Username!";
    }         
}

function rot13(message) {
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    var result =  ""
    result = message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
    return result.toString();
}

async function redirectFunction(){
    window.location.replace("/findflag");
} 
