$(document).ready(() => {
  $("#input").on("keydown", e => {
    if (e.which === 13) {
      let myNodelist = document.getElementsByTagName("LI");
      let i;
      for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");

        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
      let list = document.querySelector("ul");
      list.addEventListener(
        "click",
        function(ev) {
          if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
          }
        },
        false
      );

      let inpput = document.querySelector("input");
      inpput.addEventListener("click", function newElement() {
        let li = document.createElement("li");
        let inputValue = document.getElementById("input").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === "") {
          alert(" write something!");
        } else {
          document.getElementById("list").appendChild(li);
        }
        document.getElementById("input").value = "";

        span.appendChild(txt);
        li.appendChild(span);
      });
    }
  });
});
