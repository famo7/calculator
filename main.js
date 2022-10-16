let result = 0;
ops = '';
const resultDiv = document.querySelector('.result');

document.querySelectorAll('button').forEach((elements) => {
  elements.onclick = (e) => {
    if (e.currentTarget.classList.contains('calc')) {
      ops += e.currentTarget.innerText;
    } else if (e.currentTarget.classList.contains('equal')) {
      result = math.evaluate(ops);
      resultDiv.innerText = result;
      ops = result;
    } else if (e.currentTarget.classList.contains('clear')) {
      clear();
    } else if (e.currentTarget.classList.contains('number')) {
      ops += e.currentTarget.innerText;
      resultDiv.innerText = ops;
    }
  };
});

const clear = () => {
  result = 0;
  resultDiv.innerHTML = 0;
  ops = '';
};
