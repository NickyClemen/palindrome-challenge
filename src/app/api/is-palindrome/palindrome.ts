import * as mixins from './mixins';

class Palindrome {
  constructor(private prompt: string) {
    Object.assign(this, mixins);
    this.prompt = this.normalize(prompt);
  }

  setPrompt(prompt: string): void {
    this.prompt = this.normalize(prompt);
  }

  isPalindrome(): boolean {
    if (!this.prompt.trim() || !isNaN(Number(this.prompt))) {
      return false;
    }

    return this.prompt === this.reverse(this.prompt);
  }
}

export { Palindrome };
