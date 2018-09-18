// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
  return property;
};

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    get: function () {
      return Object.propertyName;
    },
    set: function (propertyValue) {
      Object.propertyName = propertyValue;
    }
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  return Function
};

const incrementor = () => {
  incrementor.counter++;
  return incrementor;
};
Function.__proto__.valueOf = function () {
  return this.counter;
};
incrementor.counter = 0;

const asyncIncrementor = () => {
  asyncIncrementor.counter++;
  return asyncIncrementor;
};
asyncIncrementor.counter = 0;

const createIncrementer = () => {
  function* creator() {
    let index = 0;
    while (index < 10)
      yield ++index;
  }
  return creator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  let promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(param);
    }, 1200);
  });
  return promise;
};
const getDeepPropertiesCount = (obj) => {
  let result = JSON.stringify(obj, null, ' ').match(/:/ig);
  return result.length;
};

const createSerializedObject = () => {
  return JSON.parse(JSON.stringify(null));
};

const sortByProto = (value) => {
  return value.sort((a, b) => a.__proto__ - b.__proto__)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;