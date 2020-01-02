let word = 'las palabras';

find_word_and_upper = (value) => {
  let find_word = value[0];
  let word_to_upper = find_word.toUpperCase();
  let replace = value.replace(find_word, word_to_upper);
  console.log(replace);
}

find_word_and_upper(word);


