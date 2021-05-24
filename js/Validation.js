class Validation {
    isValidFirstName(firstName) {
        if (!this.isValidMessage(firstName)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (!this.isValidMessage(lastName)) {
            return false;
        }
        return true;
    }



    isValidEmail(email) {
        return true;

    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            return false;
        }

        return true;
    }

    isValidPhoneNumber(phoneNumber) {
        if (typeof phoneNumber !== 'number' || phoneNumber === '') {
            return false;
        }
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;


