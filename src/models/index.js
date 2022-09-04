class CurrencySymbol {
  constructor(
    shortCurrency,
    fullCurrency
  ) {
    this.shortCurrency = shortCurrency;
    this.fullCurrency = fullCurrency;
  }
}

class CurrencySaved {
  constructor(
    currencyvalue,
    fullCurrency,
    optional,
    shortCurrency
  ) {
    this.currencyvalue = currencyvalue;
    this.fullCurrency = fullCurrency;
    this.optional = optional;
    this.shortCurrency = shortCurrency;
  }
}

export {
  CurrencySymbol,
  CurrencySaved
}