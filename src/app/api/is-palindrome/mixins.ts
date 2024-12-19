function reverseStr(prompt: string): string {
  return prompt.split('').reverse().join('');
}

function normalize(prompt: string): string {
  return prompt
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(' ', '');
}

function reverse(prompt: string): string {
  return reverseStr(prompt);
}

export { normalize, reverse };
