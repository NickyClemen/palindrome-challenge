import { FormEventHandler, RefObject } from 'react';

export function UserPromptForm({
  onSubmit,
  userPromptFormRef,
}: Readonly<{
  onSubmit: FormEventHandler<HTMLFormElement>;
  userPromptFormRef: RefObject<HTMLFormElement | null>;
}>) {
  return (
    <form
      onSubmit={onSubmit}
      ref={userPromptFormRef}
      className="px-8 pt-6 pb-8 mb-4 flex flex-col"
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="prompt"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
