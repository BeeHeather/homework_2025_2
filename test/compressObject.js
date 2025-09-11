'use strict';

QUnit.module("Тестируем функцию compressObject", function() {
    QUnit.test("Сжатие объекта с null, undefined и пустыми строками", function(assert) {
        const result = compressObject({
            name: "Андрей",
            age: null,
            city: "",
            country: "Россия",
            occupation: undefined
        });

        assert.deepEqual(result, { name: "Андрей", country: "Россия" }, "Должны остаться только ключи с ненулевыми значениями.");
    });

    QUnit.test("Работает с объектом без ненулевых значений", function(assert) {
        const result = compressObject({
            a: null,
            b: undefined,
            c: "",
        });

        assert.deepEqual(result, {}, "Объект без ненулевых значений должен вернуть пустой объект.");
    });

    QUnit.test("Работает с пустым объектом", function(assert) {
        const result = compressObject({});

        assert.deepEqual(result, {}, "Пустой объект должен вернуть пустой объект.");
    });

    QUnit.test("Работает с агрументом, который не является объектом", function(assert) {
        assert.throws(() => compressObject('string'), TypeError, "Не-объект (строка) должен вернуть ошибку.");
        assert.throws(() => compressObject(3), TypeError, "Не-объект (число) должен вернуть ошибку.");
    });

    QUnit.test("Работает с объектом без нулевых значений", function(assert) {
        const result = compressObject({
            name: "Андрей",
            age: 36,
            country: "Россия"
        });

        assert.deepEqual(result, { name: "Андрей", age: 36, country: "Россия" }, "Должен вернуться исходный объект.");
    });

    QUnit.test("Работает с null", function(assert) {
        const result = compressObject(null);

        assert.deepEqual(result, {}, "null должен вернуть пустой объект.");
    });
});
