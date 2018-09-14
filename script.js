function func() {
  $("#Div").click(function() {
    let Nodelist = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < Nodelist.length; i++) {
      let span = document.createElement("SPAN");

      span.appendChild(txt);
      Nodelist[i].appendChild(span);
    }

    let list = document.querySelector("ul");
    list.addEventListener("click", function(ev) {
      let li = document.createElement("li");
      let inputValue = document.getElementById("Input").value;
      let t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === "") {
        alert(" write something!");
      } else {
        document.getElementById("UL").appendChild(li);
      }
    });
    $(".Input").keypress(function(e) {
      if (e.which == 13) {
        func();
      }
    });
  });
}
