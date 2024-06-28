// import Currency from './3-currency'

// export default class Pricing {
//   constructor(amount, currency) {
//     this.amount = amount;
//     this.currency = this.currency;
//   }

//   // Getter and Setter for amount
//   get amount() {
//     return this._amount;
//   }

//   set amount(value) {
//     if (typeof value !== 'number') {
//         throw new TypeError('Amount must be a number');
//     }
//     this._amount = value;
//   }

//   // Getter and Setter for currency
//   get currency() {
//     return this._currency;
//   }

//   set currency(value) {
//     if (!(value instanceof Currency)) {
//       throw new TypeError('Currency must be an instance of Currency');
//     }
//     this._currency = value;
//   }

//   displayFullPrice() {
//     return `${this._amount} ${this._currency.name} (${this._currency.code})`;
//   }

//   //Static method to convert price
//   static convertPrice(amount, conversionRate) {
//     if (typeof amount !== 'number' || typeof conversion !== 'number') {
//       throw new TypeError('Both amount and conversionRate must be numbers');
//     }
//     return amount * conversionRate;
//   }
// }


// 4-pricing.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter and Setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
