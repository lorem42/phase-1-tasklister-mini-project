
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelector('[type="submit"]')
  btn.addEventListener("click", function (btn) {
    btn.preventDefault();

    const input = document.querySelector('[type="text"]');
    const li = document.createElement("li");
    li.textContent = input.value;
    const tasks = document.getElementById("tasks");
    tasks.appendChild(li);
    const del = document.createElement("button");
    del.innerHTML = "x";
    li.appendChild(del);
    del.addEventListener("click", deleteLi)
    input.value = "";

  });

  function deleteLi(e) {
    e.target.parentNode.remove();
  }

});



