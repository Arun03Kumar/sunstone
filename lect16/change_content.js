// const title = document.querySelector("#title");
// console.log(title);

// // const text = title.textContent;
// // console.log(text);

// title.textContent = "Lecture 18";

// title.textContent = "<h1>Lecture 19</h1>";

// const topics = document.querySelector("#content");

// console.log(topics.innerHTML);

// topics.innerHTML =
//   "<h2>Topics</h2><ul><li>Topic 1</li><li>Topic 2</li><li>Topic 3</li></ul>";

// const hidden = document.querySelector(".hidden");

// console.log(hidden.textContent);
// console.log(hidden.innerText);
// console.log(hidden.innerHTML);

const p = document.createElement("p");
console.log(p);

p.textContent = "This is a new paragraph";
console.log(p);

const content = document.querySelector("#content");
console.log(content);

content.appendChild(p);

const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  ul.appendChild(li);
}

document.body.appendChild(ul);
