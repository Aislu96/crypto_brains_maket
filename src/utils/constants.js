const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё -]+$/;
const EMAIL_PATTERN = /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
const ERROR_TEXT = "This after must contain only Latin, Cyrillic, space or hyphen.";
const ERROR_MIN_LENGTH = "Please lengthen this text to 2 characters or more";
const ERROR_PASSWORD_MIN_LENGTH = "Please lengthen this text to 8 characters or more";
const ERROR_EMAIL_MIN_LENGTH = "Please lengthen this text to 6 characters or more";
const ERROR_MAX_LENGTH = "This field must contain no more than 40 characters.";
const ERROR = "Please fill out this field.";
const ERROR_EMAIL = "Incorrect email.";
const ERROR__CONFIRM_PASSWORD = "Password mismatch";
const NUMBER_MAX_LENGTH = 40;
const NUMBER_MIN_LENGTH = 2;
const NUMBER_MIN_LENGTH_PASSWORD = 8;
const NUMBER_MIN_LENGTH_MAIL = 8;
export {
    NAME_PATTERN,
    EMAIL_PATTERN,
    ERROR_TEXT,
    ERROR_EMAIL,
    ERROR_MIN_LENGTH,
    ERROR_PASSWORD_MIN_LENGTH,
    ERROR_EMAIL_MIN_LENGTH,
    ERROR_MAX_LENGTH,
    ERROR,
    ERROR__CONFIRM_PASSWORD,
    NUMBER_MAX_LENGTH,
    NUMBER_MIN_LENGTH,
    NUMBER_MIN_LENGTH_PASSWORD,
    NUMBER_MIN_LENGTH_MAIL
}