"use strict";

/**
 * Функция сжатия объекта
 * @param {Object} obj - объект
 *
 * @example
 * // returns {a: "test"}
 * compressObject({a: "test", b: undefined, c: null, d: ""})
 *
 * @returns {Object} - объект, содержащий только ключи с ненулевыми значениями
 */
const compressObject = (obj) => {
  const result = {};

  if (!isObject(obj)) {
    throw new TypeError(`Аргумент не является объектом`);
  }

  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined && obj[key] !== "") {
      result[key] = obj[key];
    }
  }

  return result;
};

/**
 * Функция проверки, является ли аргумент функции объектом
 * @param {any} param - значение
 *
 * @example
 * // returns false
 * isObject('string')
 *
 * @returns {boolean} - true если объект, false если не-объект
 */
const isObject = (param) => {
  return typeof param === "object" && param !== null;
};
