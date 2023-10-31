export function toDateTime(str) {
  return new Date(str).toLocaleDateString();
}

export function toInputDate(str) {
  return new Date(str).toISOString().slice(0, 10);
}

export function toBase64EncodedImage(data) {
  return `data:image;base64, ${data}`;
}
