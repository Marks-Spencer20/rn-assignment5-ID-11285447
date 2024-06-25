import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const transactions = [
    { id: '3', description: 'Apple Store', subDescription: 'App Purchase', icon: "apple", amount: '- $12.99' },
    { id: '4', description: 'Spotify', subDescription: 'Monthly Subscription', icon: "",  amount: '- $5.99' },
    { id: '1', description: 'Money Transfer', subDescription: 'Bank of America', icon: "", amount: '- $88' },
    { id: '2', description: 'Grocery Shopping', subDescription: 'Walmart', icon: "", amount: '- $5.99' },
    { id: '5', description: 'Amazon', subDescription: 'Online Shopping', icon: "", amount: '- $99.99' },
    { id: '6', description: 'Starbucks', subDescription: 'Coffee', icon: "", amount: '- $4.50' },
    { id: '7', description: 'Uber', subDescription: 'Ride', icon: "", amount: '- $15.00' },
    { id: '8', description: 'Electric Bill', subDescription: 'Utility', icon: "", amount: '- $50.00' },
    { id: '9', description: 'Gym Membership', subDescription: 'Monthly Fee', icon: "", amount: '- $20.00' },
    { id: '10', description: 'Netflix', subDescription: 'Monthly Subscription', icon: "", amount: '- $9.99' },
  ];

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={[{ display: "flex", flexDirection: "row" }]}>
                        <View style={{ height: 70, width: 70, backgroundColor: "#ddd", borderRadius: 50, padding: 15, marginRight: 10 }}>

                        </View>
                        <View style={{ marginHorizontal: 4, marginVertical: 5 }}>
                            <Text style={styles.welcome}>Welcome back,</Text>
                            <Text style={styles.name}>Eric Atsu</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, width: 50, backgroundColor: "#ddd3", borderRadius: 50, padding: 15 }}>
                        <Ionicons name="search" size={20} color="black" />
                    </View>
                </View>