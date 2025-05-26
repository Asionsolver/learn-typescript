// const areaString: AreaString = {
//   width: "10",
//   height: "20",
// };

// type PoorPerson = {
//   [key in keyof RichPerson]: string;
// };

// type AreaString<T> = {
//   [key in keyof T]: T[key];
// };

// const areaStringValue: AreaString<{ width: string; height: number }> = {
//   width: "10",
//   height: 20,
// };
// price: {
//     amount: {
//       value: number;
//       currency: string;
//     };
//     currency: {
//       code: string;
//       symbol: string;
//     };
//   };

type AmountString = {
  value: string;
  currency: string;
};

type CurrencyString = {
  code: string;
  symbol: string;
};
type PriceString = {
  amount: AmountString;
  currency: CurrencyString;
};

type MobileInfoString = {
  brand: string;
  model: string;
  price: PriceString;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Price = {
  amount: {
    [key in keyof AmountString]: number | string;
  };
  currency: {
    [key in keyof CurrencyString]: number | string;
  };
};

type mobileInfo = {
  brand: string;
  model: string;
  price: {
    [key in keyof PriceString]: Price[key] extends object
      ? { [k in keyof Price[key]]: number | string }
      : number | string; // PriceString[amount | currency] is an object, so we need to map its keys. After AmountString[value | currency] and CurrencyString[code | symbol] are objects, we need to map their keys as well.
  };
};

const mobileInfoValue: mobileInfo = {
  brand: "Apple",
  model: "iPhone 14",
  price: {
    amount: {
      value: 999,
      currency: "USD",
    },
    currency: {
      code: "USD",
      symbol: "$",
    },
  },
};
console.log(mobileInfoValue);
