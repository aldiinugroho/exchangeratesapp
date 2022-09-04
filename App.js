import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as React from 'react';
import HeaderSection from './src/components/HeaderSection';
import Addingnewexchange from './src/components/Addingnewexchange';
import Holderexchange from './src/components/Holderexchange';
import { getlistcurrencies, testapi } from './src/services/apiv1';
import { CurrencySaved, CurrencySymbol } from './src/models';

export default function App() {
  const [currenciesname,setcurrenciesname] = React.useState(null)
  const [mycurrency,setmycurrency] = React.useState([])
  const [updatevaluecur,setupdatevaluecur] = React.useState(1.0000)

  React.useEffect(() => {
    getlistcurrenciesdata()
  },[])

  const getlistcurrenciesdata = async () => {
    const resp = await getlistcurrencies()
    console.log(resp);
    if (resp.message === 'succesfull') { 
      let temp = []
      Object.keys(resp.data.symbols).forEach((key,x) => {
        const newval = new CurrencySymbol(key,Object.values(resp.data.symbols)[x])
        temp.push(newval)
      });
      setcurrenciesname(temp)
    }
  }

  const tosubmitmethod = async (value) => {
    const resp = await testapi(value.currency)
    console.log(resp);
    if (resp.message === 'succesfull') { 
      let datatopush = []
      Object.keys(resp.data.rates).forEach((key,x) => {
        const result = currenciesname.filter((x) => x.shortCurrency === key)
        const valutoshow = new CurrencySaved(
          Object.values(resp.data.rates)[x],
          result[0].fullCurrency,
          `${result[0].shortCurrency} - ${result[0].fullCurrency}`,
          result[0].shortCurrency
        )
        datatopush.push(valutoshow)
      })
      console.log(datatopush);
      setmycurrency([
        ...mycurrency,
        ...datatopush
      ])
    }
  }

  const syncvalue = (val) => {
    // console.log('syncvalue',val);
    if (val.match(/^(0|[1-9]\d*)(\.\d+)?$/g)) {
      setupdatevaluecur(parseFloat(val))
    } else {
      setupdatevaluecur(1.0000)
    }
  }

  const deletemainmethod = (value) => {
    const newdata = mycurrency.filter((i,x) => x !== value)
    setmycurrency(newdata)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSection syncval={syncvalue} />
      {currenciesname !== null && (
        <ScrollView>
          <View style={{
            margin: 20,
          }}>
            {mycurrency.map((i,x) => (
              <Holderexchange key={x} index={x} value={i} newvalue={updatevaluecur} deletemainmethod={deletemainmethod} />
            ))}
            <Addingnewexchange
              tosubmitmethod={tosubmitmethod}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});