export const getMaxListing = (arr, type) => {

  const mergedArray = [];

  arr.forEach((obj) => {
    const existingObject = mergedArray.find((item) => item[type] === obj[type]);

    if (existingObject) {
      existingObject.count++;
    } else {
      obj.count = 1;
      mergedArray.push(obj);
    }

  });

  return mergedArray.sort((a, b) => b.count - a.count);

  // console.log('mergedArray', mergedArray)

}