import { IsPalindromeView } from '@components/isPalindromeView';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-end">
        <IsPalindromeView />
      </main>

      <footer className="flex justify-center">
        <p>Is this a palindrome?</p>
      </footer>
    </div>
  );
}
