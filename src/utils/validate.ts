import { validate } from "validate.js";
import messages from "./messages";

/* The `constraints` object is defining the validation rules for the form fields. It specifies that the
`email` field should not be empty and should be a valid email address. It also specifies that the
`password` field should not be empty. The `messages` object is used to provide custom error messages
for each validation rule. */
const constraints: any = {
  email: {
    presence: {
      allowEmpty: false,
      message: messages.EmailRequired,
    },
    email: {
      message: messages.EmailInvalid,
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: messages.PasswordRequired,
    },
  },
};

/**
 * The function `validateItem` takes a field name and a value, validates the value against constraints,
 * and returns an error message if the value is invalid.
 * @param {string} fieldName - The `fieldName` parameter is a string that represents the name of the
 * field being validated. It is used to access the corresponding validation constraints for that field.
 * @param {string | number} value - The `value` parameter represents the value of a form field that
 * needs to be validated. It can be either a string or a number.
 * @returns the first error message for the specified field name if there is a validation error. If
 * there are no validation errors, it returns null.
 */
export const validateItem = (fieldName: string, value: string | number) => {
  const formValues: any = {};
  formValues[fieldName] = value;

  const formFields: any = {};
  formFields[fieldName] = constraints[fieldName];

  const result = validate(formValues, formFields, {
    fullMessages: false,
  });
  if (result) {
    return result[fieldName][0];
  }
  return null;
};
