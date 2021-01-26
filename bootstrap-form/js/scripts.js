let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let myObj = {
    project: document.getElementById("project").value,
    member: document.getElementById("member").value,
    emp: document.getElementById("emp#").value,
    role: document.getElementById("role").value,
    level: document.getElementById("level").value,
    startDate1: document.getElementById("startDate1").value,
    endDate: document.getElementById("endDate").value,
    utilization: document.getElementById("util").value,
    allocation: document.getElementById("allo").value,
    rate1: document.getElementById("rate1").value,
    rate2: document.getElementById("rate2").value,
    fixedFee: document.getElementById("fFee").value,
    fee: document.getElementById("fee").value,
    revenue: document.getElementById("revenue").value,
    margin: document.getElementById("margin").value,
    cost: document.getElementById("cost").value,
    sold1: document.getElementById("sold1").value,
    sold2: document.getElementById("sold2").value,
    forecast: document.getElementById("forecast").value,
    autoAdjust: document.getElementById("adjust").value,
    sp: document.getElementById("sp").value,
    leader: document.getElementById("leader").value,
    startDate2: document.getElementById("startDate2").value,
    comments: document.getElementById("comment").value,
  };

  console.log(myObj);
});
