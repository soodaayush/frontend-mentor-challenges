let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let myObj = {
    project: document.getElementById("project").value,
    member: document.getElementById("member").value,
    emp: document.getElementById("emp#").value,
    role: document.getElementById("role").value,
  };

  console.log(myObj);
});
