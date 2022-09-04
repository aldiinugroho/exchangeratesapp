import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { currencyvalue } from "../utils"

const Holderexchange = ({value,newvalue,index,deletemainmethod}) => {

  const deletemethod = () => {
    deletemainmethod(index)
  }

  return(
    <View style={styles.containermain}>
      <View style={styles.sectionone}>
        <View style={styles.sectiononeins}>
          <Text style={styles.currencyfont}>{value.shortCurrency}</Text>
          <Text style={styles.currencyfont}>{currencyvalue(newvalue*value.currencyvalue,value.shortCurrency)}</Text>
        </View>
        <Text style={styles.currencyfontweight}>{value.optional}</Text>
        <Text>1 USD = {value.shortCurrency} {currencyvalue(value.currencyvalue,value.shortCurrency)}</Text>
      </View>
      <TouchableOpacity onPress={() => deletemethod()} style={styles.mainbtn}>
        <Text style={styles.btntitle}>(-)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containermain: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 20
  },
  sectionone: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5
  },
  sectiononeins: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  currencyfont: {
    fontSize: 18
  },
  currencyfontweight: {
    fontWeight: 'bold'
  },
  mainbtn: {
    flex: 0.15,
    borderLeftColor: '#e8e8e8',
    borderLeftWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'center'
  },
  btntitle: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default Holderexchange