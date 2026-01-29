import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { AppContext } from '../context/AppContext';

// Import CleverTap
const CleverTap = require('clevertap-react-native');

export default function ProfileScreen({ navigation }: any) {
  const { cart, setCart, orders, setOrders, currentUser } = useContext(AppContext);

  // Added itemName parameter to track which specific game is being removed/cancelled
  const cancelItem = (id: number, type: 'cart' | 'order', itemName: string) => {
    if (type === 'cart') {
      setCart(cart.filter((item: any) => item.cartId !== id));
      
      // OPTIONAL: Track cart removal
      CleverTap.recordEvent('Item Removed from Cart', {
        'Game Name': itemName,
        'User': currentUser?.email
      });
    } else {
      setOrders(orders.filter((item: any) => item.orderId !== id));
      
      // CLEVERTAP: Record Order Cancellation
      CleverTap.recordEvent('Order Cancelled', {
        'Game Name': itemName,
        'User': currentUser?.email,
        'Date': new Date().toISOString()
      });
    }
    Alert.alert("GmZ", `${itemName} cancelled/removed.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}><Text style={{fontSize: 50}}>👤</Text></View>
        <Text style={styles.username}>{currentUser?.username || "Guest Player"}</Text>
        <Text style={styles.email}>{currentUser?.email || "No email linked"}</Text>
      </View>

      <Text style={styles.sectionTitle}>🛒 Items in Cart ({cart.length})</Text>
      {cart.length === 0 && <Text style={styles.emptyText}>Cart is empty</Text>}
      {cart.map((item: any) => (
        <View key={item.cartId} style={styles.listCard}>
          <Text style={styles.itemText}>{item.name} - ₹{item.price}</Text>
          {/* Passing item.name here */}
          <TouchableOpacity onPress={() => cancelItem(item.cartId, 'cart', item.name)}>
            <Text style={styles.cancelLink}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={[styles.sectionTitle, {marginTop: 20}]}>📜 Order History ({orders.length})</Text>
      {orders.length === 0 && <Text style={styles.emptyText}>No orders yet</Text>}
      {orders.map((item: any) => (
        <View key={item.orderId} style={styles.listCard}>
          <View>
             <Text style={styles.itemText}>{item.name}</Text>
             <Text style={styles.statusText}>Status: {item.status}</Text>
          </View>
          {/* Passing item.name here */}
          <TouchableOpacity onPress={() => cancelItem(item.orderId, 'order', item.name)}>
            <Text style={styles.cancelLink}>Cancel Order</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.replace('Login')}>
        <Text style={styles.btnText}>Sign Out</Text>
      </TouchableOpacity>
      <View style={{height: 40}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8A2BE2' },
  username: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginTop: 10 },
  email: { color: '#aaa' },
  sectionTitle: { color: '#8A2BE2', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  emptyText: { color: '#555', fontStyle: 'italic', marginBottom: 10 },
  listCard: { backgroundColor: '#1E1E1E', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  itemText: { color: '#fff', fontWeight: '500' },
  statusText: { color: '#34C759', fontSize: 12 },
  cancelLink: { color: '#FF3B30', fontWeight: 'bold' },
  logoutBtn: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 10, marginTop: 40 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});