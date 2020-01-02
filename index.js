/* let word = 'las palabras';

find_word_and_upper = (value) => {
  let find_word = value[0];
  let word_to_upper = find_word.toUpperCase();
  let replace = value.replace(find_word, word_to_upper);
  console.log(replace);
}

find_word_and_upper(word); */


let arrays_words = ['sandia', 'limones', 'cebollas'];


array_map = (arr) => {
  // Recorro el array y almaceno cada elemento en value
  arr.map((value, i) => {
    // Re ese valor le extraigo la posicion 0
    let word = value[0];
    transform_upper(word, value);
  })
}


transform_upper = (data, array) => {
  let to_upper = data.toUpperCase();
  let replace = array.replace(data, to_upper);
  console.log(replace);
}

array_map(arrays_words);