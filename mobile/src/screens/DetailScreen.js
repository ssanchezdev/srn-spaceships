import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  // Recibimos los datos de la nave por parámetros de navegación
  const { ship } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{ship.name}</Text>
        <Text style={styles.factionTag}>Facción: {ship.faction}</Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.label}>Descripción:</Text>
        <Text style={styles.description}>{ship.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#1a1a1a' },
  card: { backgroundColor: '#333', padding: 20, borderRadius: 12 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  factionTag: { fontSize: 16, color: '#f1c40f', marginBottom: 15, fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#555', marginVertical: 15 },
  label: { fontSize: 14, color: '#aaa', marginBottom: 5, textTransform: 'uppercase' },
  description: { fontSize: 16, color: '#ddd', lineHeight: 24 },
});