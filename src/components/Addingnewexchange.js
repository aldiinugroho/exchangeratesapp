import * as React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Addingnewexchange = ({tosubmitmethod}) => {
  const [isbutton, setisbutton] = React.useState(true)
  const [typedcurrency, settypedcurrency] = React.useState("")

  const onChangeText = (event) => {
    // console.log(event);
    settypedcurrency(event)
  }

  const submitingMethod = () => {
    const data = {
      currency: typedcurrency
    }
    tosubmitmethod(data)
    .then(() => {
      setisbutton(true)
      settypedcurrency("")
    })
    .catch((e) => console.log(e))
  }

  return(
    <View style={styles.maincontainer}>
      {isbutton && (
        <TouchableOpacity onPress={() => setisbutton(false)} style={styles.btnfirst}>
          <Text style={styles.btnfirsttitle}>
            (+) Add More Currencies
          </Text>
        </TouchableOpacity>
      )}
      {!isbutton && (
        <View style={styles.maskedbtn}>
          <View style={styles.maskedbtninput}>
            <TextInput onChangeText={(e) => onChangeText(e)} style={{
              flex: 1
            }} placeholder='Currency'></TextInput>
          </View>
          <TouchableOpacity onPress={() => submitingMethod()} style={styles.maskedbtnsubmit}>
            <Text style={styles.maskedbtnsubmittitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  maincontainer: {
    height: 35,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnfirst: {
    flex: 1,
    justifyContent: 'center'
  },
  btnfirsttitle: {
    fontSize: 18,
    textAlign: 'center'
  },
  maskedbtn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  maskedbtninput: {
    flex: 1,
    padding: 5
  },
  maskedbtnsubmit: {
    flex: 0.4,
    justifyContent: 'center',
    borderLeftColor: '#e8e8e8',
    borderLeftWidth: 1,
    borderStyle: 'solid'
  },
  maskedbtnsubmittitle: {
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Addingnewexchange