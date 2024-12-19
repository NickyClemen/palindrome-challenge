import { Palindrome } from './palindrome';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const palindrome: Palindrome = new Palindrome(prompt);

  return new Response(
    JSON.stringify({ isPalindrome: palindrome.isPalindrome() }),
    { status: 200 },
  );
}
