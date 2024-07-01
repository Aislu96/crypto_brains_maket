const NAME_PATTERN = /^[A-Za-zА-Яа-яЁё -]+$/;
const EMAIL_PATTERN = /^((([0-9A-Za-z]{1}[-0-9A-z\\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
const ERROR_NAME = "The name must contain only Latin, Cyrillic, space or hyphen.";
const ERROR_NAME_MIN_LENGTH = "The name must consist of at least 2 characters";
const ERROR_NAME_MAX_LENGTH = "The name must consist of at least 2 characters";
const ERROR_PASSWORD = "Incorrect email.";
export {
    NAME_PATTERN,
    EMAIL_PATTERN,
    ERROR_NAME,
    ERROR_PASSWORD,
    ERROR_NAME_MIN_LENGTH,
    ERROR_NAME_MAX_LENGTH
}