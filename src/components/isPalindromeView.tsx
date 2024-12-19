'use client';

import { FormEvent, useState, useRef } from 'react';

import * as urls from '@config/enpoints.json';

import type { UserPrompt } from '../app/types';
import { UserPromptForm } from './userPromptForm';
import { UserPromptList } from './userPromptsList';

async function post(prompt: string) {
  const response = await fetch(urls['is-palindrome'], {
    method: 'POST',
    body: JSON.stringify({
      prompt,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export function IsPalindromeView() {
  const [userPromptList, setUserPromptList] = useState<UserPrompt[]>([]);
  const userPromptFormRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const {
      prompt: { value },
    } = event.currentTarget;
    const { isPalindrome } = await post(value);

    setUserPromptList((previous: UserPrompt) => [
      ...previous,
      { prompt: value, isPalindrome },
    ]);

    userPromptFormRef.current?.reset();
  }

  return (
    <div className="flex flex-col w-96">
      <UserPromptForm
        onSubmit={onSubmit}
        userPromptFormRef={userPromptFormRef}
      />

      <UserPromptList userPromptList={userPromptList} />
    </div>
  );
}
