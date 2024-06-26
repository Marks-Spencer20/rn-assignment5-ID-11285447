import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';

const MyCards = () => {
    const { isEnabled } = useContext(ThemeContext);
    return(
        <ScrollView>
            <SafeAreaView>
                <View style={[styles.container1,isEnabled && styles.darkContainer]}>
                    <View >
                        <Text style={[styles.container1,isEnabled && styles.darkContainer,
                            {textAlign: 'center', fontSize: 40, fontWeight: 'bold'}]}>My Cards</Text>
                    </View>
                    <View>
                    <Text style={[{marginBottom: -25, padding: 20,fontFamily: 'Helvetica', fontSize: 16, fontWeight: 'bold'},
                        isEnabled && styles.darkContainer]}>Welcome to your available cards.</Text>
                    <Text style={[{marginBottom: -10,  padding: 20, fontFamily: 'Helvetica', fontSize: 16, fontWeight: 'bold'}
                        ,isEnabled && styles.darkContainer]}>These are the cards that you have saved
                        </Text>
                    </View>
                    <View style={{ marginTop: 20, alignItems: 'center'}}>
                        <Image source={require('../images/Card.png')} />
                        <Text style={[styles.container1,isEnabled && styles.darkContainer]}>Master Card</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={{ marginTop: 20, alignItems: 'center'}}>
                        <Image source={require('../images/card2.png')} style={styles.pic} />
                        <Text style={[styles.container1,isEnabled && styles.darkContainer]}>Prepaid Card</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={{ marginTop: 15, alignItems: 'center'}}>
                        <Image source={require('../images/card3.png')} style={styles.pic} />
                        <Text style={[styles.container1,isEnabled && styles.darkContainer]}>Debit Card</Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </SafeAreaView>
        </ScrollView>
        
    )
}

export default MyCards;

const styles = StyleSheet.create({
    darkContainer: {
        backgroundColor: 'black',
        color: 'white',
        padding: 20
    },
    container1: {
        backgroundColor: 'white',
        padding: 20,
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pic: {
        width: 330,
        height: 200,
        borderRadius: 25
    },
    divider: {
        height: 1.5,
        backgroundColor: '#e0e0e0',
        marginVertical: 5,
    },
})