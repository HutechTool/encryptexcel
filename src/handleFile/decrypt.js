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
