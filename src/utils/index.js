import { View, StyleSheet, Text, Dimensions } from "react-native";
import { constants } from "../commons/constants";
import 'intl';

export const checkobjectorno = (value) => {
  if (value != null || value != undefined) {
    if (typeof value === 'string') {
      return JSON.parse(value)
    } else {
      return value
    }
  }
};

export const status2xx = (value) => {
  try {
    const x = constants.status['2xx'].filter(x => x == value)
    if (x.length === 0) {
      return false
    } else {
      return true
    }
  } catch (error) {
    return false
  }
};

export const status4xx = (value) => {
  try {
    const x = constants.status['4xx'].filter(x => x == value)
    if (x.length === 0) {
      return false
    } else {
      return true
    }
  } catch (error) {
    return false
  }
};

export const status5xx = (value) => {
  try {
    const x = constants.status['5xx'].filter(x => x == value)
    if (x.length === 0) {
      return false
    } else {
      return true
    }
  } catch (error) {
    return false
  }
};

export const substr = (max,stringtocut) => {
  if (stringtocut.length < max) {
    return stringtocut
  } else {
    return stringtocut.substring(0,max) + '...'
  }
}

export const currencyvalue = (number,iscurid)=>{
  if (iscurid === 'IDR') {
    const cur = new Intl.NumberFormat("id-ID",{
      style: "currency",
      currency: "IDR"
    }).format(number)
    return cur.split('Rp')[1]
  } else {
    const cur = new Intl.NumberFormat({
      style: "currency",
      currency: "IDR"
    }).format(number)
    return cur
  }
}