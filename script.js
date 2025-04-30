const numFireflies = 50;

for (let i = 0; i < numFireflies; i++) {
  const firefly = document.createElement("div");
  firefly.classList.add("firefly");
  firefly.style.top = `${Math.random() * 100}vh`;
  firefly.style.left = `${Math.random() * 100}vw`;
  document.body.appendChild(firefly);
}
