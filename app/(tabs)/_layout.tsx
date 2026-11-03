import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#2563EB',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Tambah',
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorit',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Pengaturan',
        }}
      />
    </Tabs>
  );
}
