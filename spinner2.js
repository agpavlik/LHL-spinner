//process.stdout.write('hello from spinner1.js... \rheyyy\n');

arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ',  '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, 100 + (200 * i));
}

















