export default function decrypt(Crypted, Cypher) {
  const objectDictionary = changeToDictionary(Cypher);
  const decrypt = replaceData(Crypted, objectDictionary);
  //   if (equalData(Crypted, decrypt)) {
  //     return null;
  //   }
  return decrypt;
}
function replaceData(Crypted, objectDictionary) {
  return Crypted.map((objectLine) => {
    const newObject = {};
    Object.entries(objectLine).forEach((entry) => {
      const [key, value] = entry;
      newObject[key] = objectDictionary[value];
    });
    return newObject;
  });
}
function changeToDictionary(Cypher) {
  const objectDictionary = {};
  Cypher.forEach((objectLine) => {
    const key = objectLine.key;
    const value = objectLine.value;
    objectDictionary[key] = value;
  });
  return objectDictionary;
}

// function equalData(data1, data2) {
//   data1.forEach((data, index) => {
//     const result = shallowEqualObject(data, data2[index]);
//     if (result === false) return false;
//   });
//   return true;
// }

// function shallowEqualObject(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
