import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { COLORS, SPACE, TYPO } from '../../src/styles/tokens';

export default function SettingsScreen() {
  const [compactMode, setCompactMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Compact Mode</Text>
        <Switch
          value={compactMode}
          onValueChange={setCompactMode}
          trackColor={{ false: COLORS.border, true: COLORS.accent }}
        />
      </View>

      <Text style={styles.info}>
        State: {compactMode ? 'Aktif' : 'Nonaktif'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE.l,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACE.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: SPACE.m,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  label: {
    fontSize: TYPO.body,
    fontWeight: '600',
    color: COLORS.text,
  },
  info: {
    marginTop: SPACE.m,
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },
});