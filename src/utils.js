export const range = (start, end, step = 1) => {
  let output = [];
  // solve this range utility
  // handle scenario where end is not specified range(5) - [0, 1, 2, 3, 4]
  // a conditional check for end
   //  implement a range function
  if (end == null) {
    end = start;
    start = 0;
  }

  // Generate numbers from start to end (exclusive) with the given step
  for (let j = start; j < end; j += step) {
    output.push(j);
  }

  return output;
};

