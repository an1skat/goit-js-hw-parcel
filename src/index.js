import { greet } from "./utils";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const output = document.querySelector("h1");

btn.addEventListener("click", () => {
  const name = input.value.trim();
  output.textContent = name ? greet(name) : "Введи ім’я!";
});

// document.body.append(input, btn, output);
