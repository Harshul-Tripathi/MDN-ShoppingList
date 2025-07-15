const b1 = document.querySelector("button");
const list = document.querySelector("ul");
const item = document.querySelector("input");
b1.addEventListener("click", () => {
  const myItem = item.value;
  item.value = "";
  if (myItem === "") return;
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);
  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  item.focus();
});
