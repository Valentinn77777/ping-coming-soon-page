
function validateMail(input) {
    const email = document.querySelector('.Email');

    const validRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    if (email.value.match(validRegex)) {

        document.querySelector(".valid_mail").hidden = false
                
        return true;
        
} else { 
    document.querySelector(".invalid_mail").hidden = false

    return false;
}

};

document.querySelector(".Notify_Button").onclick = function(){validateMail()}