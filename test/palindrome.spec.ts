import { Palindrome } from '@app/api/is-palindrome/palindrome';

const palindrome: Palindrome = new Palindrome('');

describe('', () => {
  test('', () => {
    expect(typeof Palindrome.prototype.isPalindrome).toBe('function');
  });

  test('', () => {
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('', () => {
    palindrome.setPrompt('');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('', () => {
    palindrome.setPrompt('2');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('', () => {
    palindrome.setPrompt('Casa');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('', () => {
    palindrome.setPrompt('Ananá');
    expect(palindrome.isPalindrome()).toBe(true);
  });

  test('', () => {
    palindrome.setPrompt('La ruta natural');
    expect(palindrome.isPalindrome()).toBe(true);
  });

  test('', () => {
    palindrome.setPrompt('COBOL es un lenguaje de programación');

    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('', () => {
    palindrome.setPrompt(
      'A mamá roma le aviva el amor a papá y a papá roma le aviva el amor a mamá',
    );

    expect(palindrome.isPalindrome()).toBe(true);
  });
});
