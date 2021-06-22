export default function encrypt(data) {
  const objectDictionary = getObjectDictionary(data);
  const encrypted = replaceData(data, objectDictionary);
  const cipher = changeToCipher(objectDictionary);
  return { encrypted, cipher };
}
function getObjectDictionary(data) {
  const objectDictionary = {};
  let count = 0;
  data.forEach((objectLine) => {
    Object.values(objectLine).forEach((val) => {
      if (objectDictionary[val] == null) {
        objectDictionary[val] = count++;
      }
    });
  });
  return objectDictionary;
}
function replaceData(data, objectDictionary) {
  return data.map((objectLine) => {
    const newObject = {};
    Object.entries(objectLine).forEach((entry) => {
      const [key, value] = entry;
      newObject[key] = objectDictionary[value];
    });
    return newObject;
  });
}
function changeToCipher(objectDictionary) {
  const cipher = [];
  Object.entries(objectDictionary).forEach((entry) => {
    const [key, value] = entry;
    cipher.push({ key: value, value: key });
  });
  cipher.sort((objectA, objectB) => objectA.key - objectB.key);
  return cipher;
}
