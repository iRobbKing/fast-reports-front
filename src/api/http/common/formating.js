export function toSnakeCase(value) {
  return anyToCase(value, stringToSnakeCase);
}

export function toCamelCase(value) {
  return anyToCase(value, stringToCamelCase);
}

function anyToCase(value, toCase) {
  if (Array.isArray(value)) return arrayToCase(value, toCase);
  if (value instanceof FormData) return formDataToCase(value, toCase)
  if (typeof value === "object" && value !== null) return objectToCase(value, toCase);
  return value;
}

function stringToSnakeCase(str) {
  return str
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
}

function stringToCamelCase(str) {
  return str
    .split("_")
    .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}

function arrayToCase(values, toCase) {
  return values.map((value) => anyToCase(value, toCase));
}

function objectToCase(obj, toCase) {
  const result = Object
    .entries(obj)
    .map(([key, value]) => [toCase(key), anyToCase(value, toCase)]);
  return Object.fromEntries(result);
}

function formDataToCase(formData, toCase) {
  const newFormData = new FormData();
  for (const [key, value] of formData.entries()) {
    newFormData.set(toCase(key), value);
  }
  return newFormData;
}
