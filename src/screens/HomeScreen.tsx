import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  SafeAreaView,
  Image 
} from 'react-native';
import { AppContext } from '../context/AppContext';

const CleverTap = require('clevertap-react-native');

const GAMES = [
  { id: 1, name: 'Elden Ring', price: 3499, desc: 'Epic open-world RPG', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aajm8sY4Ym6N6Y6Y.png' },
  { id: 2, name: 'Cyberpunk 2077', price: 2499, desc: 'Sci-fi action in Night City', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/1717/Zf9Ym6N6Y6Y.png' },
  { id: 3, name: 'GTA V', price: 1999, desc: 'Open world crime and chaos', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2823/Zf9Ym6N6Y6Y.png' },
  { id: 4, name: 'Valorant', price: 0, desc: '5v5 tactical shooter', img: 'https://cmsassets.rgpub.io/assets/v3/assets/bltb730eada6521948c/blt1a0248667500d41e/65f903554625b16955a88c2f/V_AGENTS_587x930_KAYO.png' },
  { id: 5, name: 'Minecraft', price: 1500, desc: 'Infinite building survival', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYm6N6Y6Y.png' },
];

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch] = useState('');
  const { cart, setCart, orders, setOrders } = useContext(AppContext);

  // CLEVERTAP: 1. Product Clicked (Viewed interest)
  const handleProductClick = (game: any) => {
    CleverTap.recordEvent('Product Clicked', {
      'Game Name': game.name,
      'Price': game.price,
      'Category': game.desc
    });
    // You could also navigate to a details page here if you had one
    Alert.alert("GmZ Info", `${game.name}: ${game.desc}`);
  };

  // CLEVERTAP: 2. Add to Cart / Purchase
  const handleAction = (type: 'Cart' | 'Buy', game: any) => {
    if (type === 'Cart') {
      setCart([...cart, { ...game, cartId: Date.now() }]);
      
      CleverTap.recordEvent('Add to cart clicked', { 
        'Game Name': game.name,
        'Amount': game.price 
      });
      
      Alert.alert("GmZ Cart", `${game.name} added to cart!`);
    } else {
      setOrders([...orders, { ...game, orderId: Date.now(), status: 'Processing' }]);
      
      CleverTap.recordEvent('Product Purchased', { 
        'Game Name': game.name, 
        'Price': game.price 
      });
      
      Alert.alert("GmZ Store", `Purchase successful: ${game.name}`);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.searchSection}>
          <Text>🔍</Text>
          <TextInput 
            placeholder="Search Games..." 
            placeholderTextColor="#aaa" 
            style={styles.searchBar}
            onChangeText={setSearch}
          />
        </View>

        <View style={styles.banner}>
          <Image 
            source={{ uri: 'https://img.freepik.com/free-vector/gaming-banner-template-with-glitch-effect_23-2148659649.jpg' }} 
            style={styles.bannerImg}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
              <Text style={styles.bannerTitle}>SEASON PASS SALE</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Featured Titles</Text>
        
        {GAMES.filter(g => g.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <View key={item.id} style={styles.card}>
            {/* Clickable Area for "Product Clicked" event */}
            <TouchableOpacity 
              style={styles.clickableArea} 
              onPress={() => handleProductClick(item)}
            >
              <Image source={{ uri: item.img }} style={styles.gameImg} />
              <View style={styles.infoArea}>
                <Text style={styles.gameTitle}>{item.name}</Text>
                <Text style={styles.price}>₹{item.price}</Text>
              </View>
            </TouchableOpacity>
            
            <View style={styles.actions}>
              <TouchableOpacity style={styles.addBtn} onPress={() => handleAction('Cart', item)}>
                <Text>🛒</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buyBtn} onPress={() => handleAction('Buy', item)}>
                <Text style={styles.buyText}>BUY</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.profileBtnText}>GO TO PROFILE ({cart.length + orders.length})</Text>
        </TouchableOpacity>
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#121212' },
  container: { flex: 1, padding: 15 },
  searchSection: { flexDirection: 'row', backgroundColor: '#1E1E1E', padding: 10, borderRadius: 12, alignItems: 'center', marginBottom: 20 },
  searchBar: { color: '#fff', flex: 1, marginLeft: 10 },
  banner: { height: 120, borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
  bannerImg: { width: '100%', height: '100%' },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(138, 43, 226, 0.4)', justifyContent: 'center', alignItems: 'center' },
  bannerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 20 },
  sectionTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  card: { backgroundColor: '#1E1E1E', padding: 12, borderRadius: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  clickableArea: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  gameImg: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  infoArea: { flex: 1 },
  gameTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  price: { color: '#34C759', fontSize: 14, fontWeight: 'bold' },
  actions: { flexDirection: 'row' },
  addBtn: { backgroundColor: '#333', padding: 10, borderRadius: 8, marginRight: 8 },
  buyBtn: { backgroundColor: '#8A2BE2', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 8 },
  buyText: { color: '#fff', fontWeight: 'bold' },
  profileBtn: { backgroundColor: '#333', padding: 18, borderRadius: 12, marginTop: 10 },
  profileBtnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});