import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemReviews({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews for {item.name}</Text>
      <Text style={styles.review}>This is a fantastic product! ⭐⭐⭐⭐⭐</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    fontSize: 16,
    color: '#333',
  },
});
