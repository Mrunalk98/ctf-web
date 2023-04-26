function isThisFlag(label) {
    const flag = "aW1hZ2UxMQ==";
    if (label == atob(flag)) {
        window.alert("Flag is encoded in this image!")
    }       
    else {
        console.log("Not the flag!")
    }
}


