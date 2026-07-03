const { validatePhone } = require('./phone');

/**
 * Validates the pre-list form fields (name + phone).
 * @param {string} name  - Trimmed name value.
 * @param {string} phone - Raw phone value.
 * @returns {{ valid: boolean, nameError: boolean, phoneError: string }}
 */
function validateForm(name, phone) {
  let valid = true;
  let nameError = false;
  let phoneError = '';

  if (!name || name.length < 3) {
    nameError = true;
    valid = false;
  }

  phoneError = validatePhone(phone);
  if (phoneError) {
    valid = false;
  }

  return { valid, nameError, phoneError };
}

module.exports = { validateForm };
