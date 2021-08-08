const counter = () => {
  let seconds = 0;
  const addSeconds = () => {
    seconds++;
    document.body.style.fontSize = "50px";
    document.body.textContent = `${seconds} sekund`;
  };
  setInterval(addSeconds, 1000);
  return addSeconds;
};

const stopWatch = counter();
stopWatch();
