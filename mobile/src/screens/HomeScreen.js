import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSpaceships } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [ships, setShips] = useState([]); // Datos originales
  const [filteredShips, setFilteredShips] = useState([]); // Datos filtrados
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Cargar datos al iniciar
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getSpaceships();
    setShips(data);
    setFilteredShips(data);
    setLoading(false);
  };

  // Lógica del filtro
  const handleFilter = (text) => {
    setSearch(text);
    if (text) {
      const newData = ships.filter(item => {
        const itemData = item.faction ? item.faction.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredShips(newData);
    } else {
      setFilteredShips(ships);
    }
  };

  // Renderizado de cada tarjeta
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Detail', { ship: item })}
    >
      <View>
        <Text style={styles.shipName}>{item.name}</Text>
        <Text style={styles.shipFaction}>{item.faction}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Star Wars Catalog</Text>
        <TextInput
          style={styles.input}
          placeholder="Filtrar por facción (ej. Empire)..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={handleFilter}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#f1c40f" style={{marginTop: 50}} />
      ) : (
        <FlatList
          data={filteredShips}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron naves.</Text>}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { padding: 16, backgroundColor: '#1a1a1a', borderBottomWidth: 1, borderBottomColor: '#333' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#f1c40f', marginBottom: 10 },
  input: { backgroundColor: '#333', color: '#fff', padding: 10, borderRadius: 8, fontSize: 16 },
  list: { padding: 16 },
  card: { backgroundColor: '#252525', padding: 16, marginBottom: 12, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  shipName: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  shipFaction: { fontSize: 14, color: '#aaa', marginTop: 4 },
  arrow: { fontSize: 20, color: '#555' },
  emptyText: { color: '#fff', textAlign: 'center', marginTop: 20 },
});