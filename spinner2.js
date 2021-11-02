
const arrSymbol = ['\r|      ', '\r/       ','\r-       ','\r\\       ', '\r|      ', '\r/       ','\r-       ','\r\\       ', '\r|      \n']

let delay = 100;
arrSymbol.forEach(symbol => {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, delay);
  delay += 2000;
});


// ... fill in the rest yourself ...
process.stdout.write("hello from spinner1.js... \rheyyy\n");
