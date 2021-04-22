"use strict";

let $ = document.querySelector.bind(document);

const ipSearch = $("#ipSearch");
const ipBtn = $("#ipBtn");

ipBtn.addEventListener("click", getIp);

const ipAddress = $("#ipAddress");

ipAddress.style.display = "flex";
ipAddress.style.flexDirection = "column";

const ipLocation = $("#location");

ipLocation.style.display = "flex";
ipLocation.style.flexDirection = "column";

const timeZone = $("#timeZone");

timeZone.style.display = "flex";
timeZone.style.flexDirection = "column";

const isp = $("#isp");

isp.style.display = "flex";
isp.style.flexDirection = "column";

const map = $("#map");

async function getData() {
  const url = `https://ipinfo.io/${ipSearch.value}/?token=7ca97cb223d14f`;

  let reponse = await fetch(url, {
    method: "GET",
  });

  let data = reponse.json();

  return data;
}

function getIp() {
  let ipData = getData();

  ipData.then((data) => {
    console.log(data);

    ipAddress.innerHTML = `
    <label>IP Address</label>
    <strong>${data.ip}</strong>`;

    ipLocation.innerHTML = `
    <label>Location</label>
    <strong>${data.region}</strong>`;
    timeZone.innerHTML = `
    <label>Timezone</label>
    <strong>${data.timezone}</strong>`;

    isp.innerHTML = `
    <label>ISP</label>
    <strong>${data.org}</strong>`;

    map.src = `https://maps.google.com/?q=${data.loc}&output=embed`;

    console.log(data.loc);
  });
}
