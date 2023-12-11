let array = [];

function insertElement() {
  const insertInput = document.getElementById("insertInput");
  const value = parseInt(insertInput.value);

  if (!isNaN(value)) {
    array.push(value);
    visualizeArray();
    insertionSort();
  }

  insertInput.value = "";
}

function visualizeArray() {
  const arrayContainer = document.getElementById("array-container");
  arrayContainer.innerHTML = "";

  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.className = "array-bar";
    bar.style.height = `${value * 0.5}px`;
    bar.textContent = value;
    arrayContainer.appendChild(bar);
  });
}

function insertionSort() {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = key;
    setTimeout(() => visualizeArray(), i * 1000);
  }
}
