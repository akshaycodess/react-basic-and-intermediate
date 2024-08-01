//  Email:
//    Required (Cannot be blank)
//    Must end in @axelerant.com
export function validateEmail(email) {
    const errors = []
    if (email.length === 0) {
        errors.push("Required")
    }
    if (!email.endsWith("@axelerant.com")) {
        errors.push("Must end with @axelerant.com");
    }
    return errors
}

//  Password:
//    Required (Cannot be blank)
//    Must Be 10 characters or longer
//    Must include a lowercase letter
//    Must include an uppercase letter
//    Must include a number
export function validatePassword(password) {
    const errors = []
    if (password.length < 10) {
        errors.push("Must Be 10 characters or longer")
    }
    if (!password.match(/[a-z]/)) {
        errors.push("Must include a lowercase letter")
    }
    if (!password.match(/[A-Z]/)) {
        errors.push("Must include an uppercase letter")
    }
    if (!password.match(/[0-9]/)) {
        errors.push("Must include a number");
    }
    return errors
}