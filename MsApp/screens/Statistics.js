import { View, Text, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
const Statistics = () => {
    const { isEnabled } = useContext(ThemeContext);
    return(
        <ScrollView>
            <SafeAreaView style={[styles.container1,isEnabled && styles.darkContainer]}>
            <View >
                <Text style={[styles.container1,isEnabled && styles.darkContainer,{textAlign: 'center', fontSize: 40, fontWeight: 'bold'}]}>Statistics</Text>
            </View>
            <View style={[styles.container1,isEnabled && styles.darkContainer]}>
                <Text style={[styles.container1,isEnabled && styles.darkContainer,{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}]} >Master Card</Text>
                <View style={{flexDirection: 'row',
                     justifyContent: 'space-between', padding: 20}}>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Expenditure</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Send</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Recieve</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Loan</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Topup</Text>
                </View>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Total Amount</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$1,578.10</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$3,500.85</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>%2,790.46</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$1,000.00</Text>
                </View>
                </View>
            </View>

            <View style={[styles.container1,isEnabled && styles.darkContainer]}>
                <Text style={[styles.container1,isEnabled && styles.darkContainer,{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}]} >Prepaid Card</Text>
                <View style={{flexDirection: 'row',
                     justifyContent: 'space-between', padding: 20}}>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Expenditure</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Send</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Recieve</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Loan</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Topup</Text>
                </View>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Total Amount</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$2,008.10</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$2,590.85</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$1,790.46</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$1,060.00</Text>
                </View>
                </View>
            </View>

            <View style={[styles.container1,isEnabled && styles.darkContainer]}>
                <Text style={[styles.container1,isEnabled && styles.darkContainer,{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}]} >Debit Card</Text>
                <View style={{flexDirection: 'row',
                     justifyContent: 'space-between', padding: 20}}>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Expenditure</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Send</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Recieve</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Loan</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold',paddingBottom: 5}]}>Topup</Text>
                </View>
                <View>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace',paddingBottom: 5}]}>Total Amount</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$3,008.10</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$7500.85</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$590.46</Text>
                    <Text style={[styles.container1,isEnabled && styles.darkContainer,{ fontSize: 15, fontWeight: 'bold', color: 'blue',paddingBottom: 5}]}>$2,100.00</Text>
                </View>
                </View>
            </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Statistics;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: 'black',
        color: 'white'
    },
})