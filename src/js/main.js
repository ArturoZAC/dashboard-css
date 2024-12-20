import "./darkmode.js"
import { amountFollowers } from "./helpers.js";
import {printBody, printHeader} from "./layout.js"

const contentFollowers = document.querySelector(".followers");
const contentOverviews = document.querySelector(".overviews");

const totalNumber = document.querySelector(".totalNumber");
const months = document.querySelector(".months");
const currentMonth = document.querySelector(".currentMonth");

let dataDashboard = null;

months.addEventListener('click', (e) => {
  if(e.target.classList.contains('item')){
    const nameMonth = e.target.textContent;
    currentMonth.textContent = nameMonth;

    const { dataHead, dataBody } = dataDashboard[nameMonth];
    totalNumber.textContent = amountFollowers(dataHead);

    printHeader(dataHead, contentFollowers);
    printBody(dataBody, contentOverviews);

  }
})



async function getData() {
  try {
    const data = await fetch("./src/data.json");
    const res = await data.json();

    dataDashboard = res;
    const { dataHead, dataBody } = dataDashboard.January;
    totalNumber.textContent = amountFollowers(dataHead);

    printHeader( dataHead, contentFollowers);
    printBody( dataBody, contentOverviews);

  } catch (error) {
    console.log(error)
  }
}

getData();