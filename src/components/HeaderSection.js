import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native"

const HeaderSection = ({syncval}) => {
  const [valuecurr,setvaluecurr] = React.useState(1.0000)

  const onchanginvalue = (val) => {
    setvaluecurr(val)
    syncval(val)
  }

  return(
    <View style={styles.containerheadermain}>
      <Text>USD - United States Dollars</Text>
      <View style={styles.contaiterheadertext}>
        <Text style={styles.fontheader}>USD</Text>
        <TextInput value={valuecurr} onChangeText={(val) => onchanginvalue(val)} defaultValue={"1.0000"}></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fontheader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  contaiterheadertext: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerheadermain: {
    height: 75,
    padding: 15,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    justifyContent: 'space-evenly'
  }
});

export default HeaderSection