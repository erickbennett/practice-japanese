function createRandomInteger(min, max) {
  let int = Math.round(Math.random() * (max - min));
  if (int === 0) {
    return 1;
  }
  return int;
}

function randomItem() {
  const counterTypes = [
    { icon: '/tv.png', text: 'テレビ' },
    { icon: '/tv.png', text: 'テレビ' },
    { icon: '/bed.png', text: 'ベッド' },
    { icon: '/chair.png', text: 'イス' },
    { icon: '/sofa.png', text: 'ソファ' },
  ];

  const counterSelection = createRandomInteger(1, counterTypes.length);
  return {
    itemIcon: counterTypes[counterSelection].icon,
    itemText: counterTypes[counterSelection].text,
  };
}

function convertToKana(number) {
  switch (number) {
    case 1:
      return 'ひとつ';
    case 2:
      return 'ふたつ';
    case 3:
      return 'みっつ';
    case 4:
      return 'よっつ';
    case 5:
      return 'いつつ';
    case 6:
      return 'むっつ';
    case 7:
      return 'ななつ';
    case 8:
      return 'やっつ';
    case 9:
      return 'ここのつ';
    case 10:
      return 'とお';
  }
}

export { convertToKana, createRandomInteger, randomItem };
