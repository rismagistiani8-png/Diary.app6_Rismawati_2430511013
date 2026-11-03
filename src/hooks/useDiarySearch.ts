import { useState, useMemo } from 'react';
import { DiaryEntry } from '../context/DiaryContext';

export function useDiarySearch(entries: DiaryEntry[]) {
  const [query, setQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const filteredEntries = useMemo(() => {
    return entries.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase());
      
      const matchesMood = selectedMood ? item.mood === selectedMood : true;

      return matchesQuery && matchesMood;
    });
  }, [entries, query, selectedMood]);

  const resetFilter = () => {
    setQuery('');
    setSelectedMood(null);
  };

  return {
    query,
    setQuery,
    selectedMood,
    setSelectedMood,
    filteredEntries,
    resultCount: filteredEntries.length,
    resetFilter,
  };
}
