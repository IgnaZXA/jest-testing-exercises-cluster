

const array = [1,2,3,4,5,6,7,8,9];
const arrayOfStrings = ['', 'boots', 'mobile', 'mountain'];
const arrayOfStringsandNumbers = [0, 'boots', 1, 'mountain'];
const misMierdaNotas = [0,0,0,0,0,0]; 


export function hasAnyString(array){
  const x = array.find((item) => {
    return (typeof item === 'string');
  });
  if (array.length > 0) return (typeof x ==='string');
  else return false;
}

export function getSumOfAllValues(arr) {
  if(hasAnyString(arr)){
    throw new Error('Error! Cannot be any strings in the array, well technically yes...');
  }
  const sum = arr.reduce((acc, current) => {
    acc += current;
    return acc;
  }, 0);
  return sum;
}

export function getNotesAvg(notes){
  const sum = getSumOfAllValues(notes);
  const avg = Math.round(sum/notes.length);
  console.log(`your notes in this course is ${avg}`);
  return avg;
}

getNotesAvg(misMierdaNotas);