import tempImg from "../images/apple.png";

export const transactions = [
  {
    id: 1,
    title: {
      name: "Apple",
      transaction: {
        pending: true,
        type: "credit",
        amount: 14.06
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Card Number Used",
      percent: 3
    },
    date: 1686590900000,
    authorizedUser: "Diana"
  },
  {
    id: 2,
    title: {
      name: "Payment",
      transaction: {
        pending: false,
        type: "payment",
        amount: 174
      }

    },
    logo: tempImg,
    subtitle: {
      text: "From JPMorgan Chase Bank National"
    },
    date: 1686490900000
  },
  {
    id: 3,
    title: {
      name: "Apple",
      transaction: {
        pending: false,
        type: "credit",
        amount: 3.24
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Card Number Used",
      percent: 3
    },
    date: 1686390900000,
    authorizedUser: "Diana"
  },
  {
    id: 4,
    title: {
      name: "Payment",
      transaction: {
        pending: true,
        type: "payment",
        amount: 99.71
      }
    },
    logo: tempImg,
    subtitle: {
      text: "From JPMorgan Chase Bank National",
    },
    date: 1686290900000
  },
  {
    id: 5,
    title: {
      name: "Payment",
      transaction: {
        pending: false,
        type: "payment",
        amount: 73.58
      }
    },
    logo: tempImg,
    subtitle: {
      text: "From JPMorgan Chase Bank National",
    },
    date: 1682227200000
  },
  {
    id: 6,
    title: {
      name: "IKEA",
      transaction: {
        pending: true,
        type: "credit",
        amount: 21.61
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Round Rock, TX",
      percent: 2
    },
    date: 1681227200000
  },
  {
    id: 7,
    title: {
      name: "Target",
      transaction: {
        pending: false,
        type: "credit",
        amount: 73.58
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Cedar Park, TX",
      percent: 2
    },
    date: 1678227200000
  },
  {
    id: 8,
    title: {
      name: "IKEA",
      transaction: {
        pending: false,
        type: "credit",
        amount: 33.58
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Cedar Park",
      percent: 5
    },
    date: 1672227200000
  },
  {
    id: 9,
    title: {
      name: "Target",
      transaction: {
        pending: false,
        type: "payment",
        amount: 143.58
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Cedar Park, TX",
    },
    date: 1668227200000
  },
  {
    id: 10,
    title: {
      name: "Target",
      transaction: {
        pending: false,
        type: "payment",
        amount: 55.58
      }
    },
    logo: tempImg,
    subtitle: {
      text: "Cedar Park, TX",
      percent: 1
    },
    date: 1662227200000
  }
];

export const cardLimit = 1500;
export const cardBalance = 17.30;
