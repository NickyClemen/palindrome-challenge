import type { UserPrompt } from '@app/types';

export function UserPromptList({
  userPromptList,
}: Readonly<{ userPromptList: UserPrompt[] }>) {
  return (
    <ul className="list-outside flex flex-col justify-center items-center max-w-sm rounded overflow-hidden shadow-lg max-h-80 overflow-y-scroll scrollbar">
      {userPromptList?.map(({ prompt, isPalindrome }, index) => (
        <li key={index}>
          {prompt} - {isPalindrome ? 'Sí' : 'No'}
        </li>
      ))}
    </ul>
  );
}
