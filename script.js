console.log(27);

console.log(43);

const mixedMessage = function () {
  const name = ["James", " Jon", "Sam", "Luke", "Joe"];
  const noun = ["likes", "loves", "hates", "despises", "dislikes"];
  const adj = ["little", "tiny", "huge", "big", "average"];
  const colors = ["red", "blue", "silver", "green", "orange"];
  const obj = ["cars", "aeroplanes", "kayaks", "trains", "boats"];

  let nameNum = Math.floor(Math.random() * 5);
  let nounNum = Math.floor(Math.random() * 5);
  let adjNum = Math.floor(Math.random() * 5);
  let colorsNum = Math.floor(Math.random() * 5);
  let objNum = Math.floor(Math.random() * 5);

  console.log(nameNum);
  console.log(nounNum);
  console.log(adjNum);
  console.log(colorsNum);
  console.log(objNum);
};

mixedMessage();
