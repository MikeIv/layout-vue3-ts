import { ref, onMounted } from 'vue'

export const useTestFunc = () => {
  const numArr = ref([2, 32, 1234, 54, 323]);

  function greet(person: string, date: Date) {
    console.log(`Hello, ${person}! Today is ${date.toDateString()}`)
  }
  const test = greet('John', new Date());

  return {
    numArr,
    test,
  };
};
