import { useState } from 'react';

export function useInterestState() {
  const [interests, setInterests] = useState<string[]>([]);

  return { interests, setInterests };
}