import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { recipe } = route.params;
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>📖 {recipe.title}</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F6EF' },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#4A7C59' },
  instructions: { fontSize: 18, lineHeight: 28 }
});
