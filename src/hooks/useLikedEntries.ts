import { useMemo } from 'react';
import { DiaryEntry } from '../context/DiaryContext';

export function useLikedEntries(entries: DiaryEntry[], likedIds: Set<number>) {
  return useMemo(() => {
    return entries.filter((item) => likedIds.has(item.id));
  }, [entries, likedIds]);
}
