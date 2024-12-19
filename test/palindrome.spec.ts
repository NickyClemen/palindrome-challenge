import { Palindrome } from '@app/api/is-palindrome/palindrome';

const palindrome: Palindrome = new Palindrome('');

describe('Palindrome class behavior', () => {
  test('must have the is Palindrome function defined.', () => {
    expect(typeof Palindrome.prototype.isPalindrome).toBe('function');
  });

  test('must return false in case of empty input.', () => {
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('must return false in case of numeric input.', () => {
    palindrome.setPrompt('2');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('must return false when entering a word that is not a palindrome.', () => {
    palindrome.setPrompt('Casa');
    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('must return true when entering a word that is a palindrome.', () => {
    palindrome.setPrompt('Ananá');
    expect(palindrome.isPalindrome()).toBe(true);
  });

  test('must return true when entering a sentence that is a palindrome.', () => {
    palindrome.setPrompt('La ruta natural');
    expect(palindrome.isPalindrome()).toBe(true);
  });

  test('must return false when entering a sentence that is not a palindrome.', () => {
    palindrome.setPrompt('COBOL es un lenguaje de programación');

    expect(palindrome.isPalindrome()).toBe(false);
  });

  test('must return true when entering a sentence with special characters that is a palindrome.', () => {
    palindrome.setPrompt(
      'A mamá roma le aviva el amor a papá y a papá roma le aviva el amor a mamá',
    );

    expect(palindrome.isPalindrome()).toBe(true);
  });
});
