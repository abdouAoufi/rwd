import axios from "axios";
const emailInput = document.getElementById("emailInput");
const otpInput = document.getElementById("otpInput");
const submitBtn = document.getElementById("submitBtn");

const BASE_URL = "https://mmt-sit-cf.apse1.gtf.np-api.fwd.com/live";

const headers = {
  "x-apigw-api-id": "f90e7cd9fd"
};

function isEmail(email) {
  // Regular Expression (Not accepts second @ symbol
  // before the @gmail.com and accepts everything else)
  var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Converting the email to lowercase
  return regexp.test(String(email).toLowerCase());
}

const signupEp = "/auth/v2/api/signup";

const signupBody = {
  email: "",
  name: "Mary Jane",
  language: "en-GB",
  signupLocation: "SG",
  signupIpAddress: "1.178.216.0",
  tcFlag: true,
  tcVersion: "1.0.0",
  appVersion: "1.0.0",
  osVersion: "Apple 14.2"
};

const getAuth = () => {
  const email = emailInput.value;
  const otp = otpInput.value;

  if (!isEmail(email)) {
    // return alert("check input");
  }
  // if (otp.length < 6) {
  //   return;
  // }
  signupBody.email = email;

  fetch(`https://www.google.com`, {
    method: "POST",
    body: JSON.stringify(signupBody),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-apigw-api-id": "f90e7cd9fd"
    }
  })
    .then((res) => {
      res.json().then((data) => console.log(data));
    })
    .catch((err) => console.log({ err }));
};

submitBtn.addEventListener("click", getAuth);
