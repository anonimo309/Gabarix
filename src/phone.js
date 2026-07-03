/**
 * Validates an international phone string.
 * Expects country-code + DDD + 8-9 digit number (13-14 digits total).
 * @param {string} value - Raw phone input (may include formatting chars).
 * @returns {string} Error message, or empty string when valid.
 */
function validatePhone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 13) {
    return 'Informe codigo do pais, DDD e numero corretamente (ex: 55 85 9 96992835).';
  }
  if (digits.length > 14) {
    return 'Numero muito longo. Verifique o pais, DDD e numero.';
  }
  if (!/^(\d{1,3})(\d{2})(\d{8,9})$/.test(digits)) {
    return 'Informe codigo do pais, DDD e numero corretamente.';
  }
  return '';
}

/**
 * Formats a raw phone string with a WhatsApp-style mask.
 * @param {string} raw - Current input value.
 * @returns {string} Formatted value.
 */
function formatPhone(raw) {
  const digits = raw.replace(/\D/g, '').slice(0, 14);

  if (digits.length >= 13) {
    const countryLen = digits.length - 11;
    const country = digits.slice(0, countryLen);
    const ddd = digits.slice(countryLen, countryLen + 2);
    const rest = digits.slice(countryLen + 2);
    return country + ' ' + ddd + ' ' + rest[0] + ' ' + rest.slice(1);
  }

  let v = digits;
  if (v.length > 6) {
    v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (v.length > 2) {
    v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else {
    v = v.replace(/^(\d*)$/, '($1');
  }
  return v;
}

module.exports = { validatePhone, formatPhone };
