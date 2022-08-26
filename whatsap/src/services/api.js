const chatData = [
  {
    id: '1',
    receiver: {
      id: '1',
      firstName: 'Cem',
      lastName: 'Eriş',
      image: require('../assets/1.jpg'),
    },
    messages: [
      {
        text: 'Naber',
        datetime: '12:14',
      },
    ],
  },
  {
    id: '2',
    receiver: {
      id: '1',
      firstName: 'Kaan',
      lastName: 'Can',
      image: require('../assets/2.jpg'),
    },
    messages: [
      {
        text: 'Merada buluşalım',
        datetime: '19:45',
      },
    ],
  },
  {
    id: '3',
    receiver: {
      id: '1',
      firstName: 'Ertuğrul Gazi',
      lastName: 'Yıldız',
      image: require('../assets/3.jpg'),
    },
    messages: [
      {
        text: 'Seni bekliyorum nerede kaldın.',
        datetime: '20:45',
      },
    ],
  },
];
export default chatData;
