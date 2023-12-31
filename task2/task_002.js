/**
 * 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
 */

const createCounter = () => {
    return {
        count: 0,
        increment() {console.log(++this.count)},
        decrement() {console.log(--this.count)} 
    }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();