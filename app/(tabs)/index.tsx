import { useCallback, useRef } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useDiary } from "../../src/context/DiaryContext";
import { useDiarySearch } from "../../src/hooks/useDiarySearch";
import DiaryCard from "../../src/components/DiaryCard";
import { COLORS, SPACE, TYPO, RADIUS } from "../../src/styles/tokens";

const MOOD_OPTIONS = ['\u{1F60A}', '\u{1F680}', '\u{2615}', '\u{2728}'];

export default function HomeScreen() {
  const router = useRouter();
  const { entries, likedIds, toggleLike } = useDiary();
  const { 
    query, 
    setQuery, 
    selectedMood, 
    setSelectedMood, 
    filteredEntries, 
    resultCount, 
    resetFilter 
  } = useDiarySearch(entries);
  
  const searchRef = useRef<React.ElementRef<typeof TextInput>>(null);

  const openDetail = useCallback(
    (id: number) => {
      router.push({
        pathname: "/detail/[id]",
        params: { id: String(id) },
      });
    },
    [router]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>

      <View style={styles.searchRow}>
        <TextInput
          ref={searchRef}
          value={query}
          onChangeText={setQuery}
          placeholder="Cari diary..."
          style={styles.search}
        />
        <Pressable onPress={resetFilter} style={styles.resetButton}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.moodFilterRow}>
        <Pressable
          onPress={() => setSelectedMood(null)}
          style={[styles.moodChip, selectedMood === null && styles.moodChipActive]}
        >
          <Text style={[styles.moodChipText, selectedMood === null && styles.moodChipTextActive]}>Semua</Text>
        </Pressable>
        {MOOD_OPTIONS.map((mood) => (
          <Pressable
            key={mood}
            onPress={() => setSelectedMood(mood)}
            style={[styles.moodChip, selectedMood === mood && styles.moodChipActive]}
          >
            <Text style={styles.moodChipText}>{mood}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text style={styles.counter}>{resultCount} entri ditemukan</Text>

      <FlatList
        data={filteredEntries}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            mood={item.mood}
            liked={likedIds.has(item.id)}
            onPress={() => openDetail(item.id)}
            onToggleLike={() => toggleLike(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Diary tidak ditemukan.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.background,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: SPACE.m,
  },
  searchRow: {
    flexDirection: "row",
    gap: SPACE.s,
    marginBottom: SPACE.s,
  },
  search: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    padding: 10,
    backgroundColor: "#fff",
    color: COLORS.text,
  },
  resetButton: {
    justifyContent: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  resetText: {
    fontWeight: '600',
    color: COLORS.text,
  },
  moodFilterRow: {
    gap: SPACE.xs,
    marginBottom: SPACE.s,
    maxHeight: 45,
  },
  moodChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moodChipActive: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  moodChipText: {
    fontSize: 14,
    color: COLORS.text,
  },
  moodChipTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  counter: {
    color: COLORS.muted,
    marginVertical: SPACE.s,
  },
  list: {
    gap: SPACE.m,
    paddingBottom: SPACE.xl,
  },
  empty: {
    textAlign: "center",
    color: COLORS.muted,
    paddingTop: 40,
  },
});
