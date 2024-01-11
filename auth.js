//https://app.magis5.com.br/ordermanagement/user/login

const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const urlLogi = "https://app.magis5.com.br/ordermanagement/user/login"
const payloadLogin = {
    "login": process.env.LOGIN,
    "password": process.env.SENHA,
    "recaptchaToken": "03AFcWeA5FZPrYDJuEO2rhhRxpgLNbTLfI2awze807lOVVAtSNIhjz24rXZN1TIadjRzMWN_dfoAHLGBEK52wSEC0EnRRbdpMsXsABOFANwN9e52TXyI6AqIXaEnQaI39h-1EKRLjOdeqWKfzr6IYJj5LSfQJlssKyCK6SUXtW_E8BFJbgJhnHv5bz3MKf5Bi3IQNXwxuu59K56PVChxNexIRWDbSUWgxfP0bfVz-vvPjJN7O_mn1zodbNuxDj3kW8G-jSf48mAMNhDPd5soTS6Yk_wD2BpUmOLBhvU8_fOY_VaYizCVIoL-kdl_ONBZxa7EeC5E8sGw1S6NNIegxre-rBcNHieBI3-2S7tz-OQfo-cospYnl4Ar2hRh25fy5bVZO9k3q0_E0sIocGMsMR3snVXEnNbXDRuP07tVOcL8T8SqCB_HefdV4leKLpEek_mGtq9d2Tlf0O5tSMJl2XaOrynLycTEOMm3LHy_0TdNTBvFukLYuIlf1646sfurKv1Wutr68mU4SD8M7GbUIIQoGz_djRZKqIYFUDjdK1rlfyZ7vr8MQWKYg"
}


axios.post(urlLogi, payloadLogin, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': '*/*'
    }
    }).then(async res => {
    const token =   await res.data.token;
  
    fs.writeFile(process.env.TOKEN_FILE_PATH, token, (err) => {
      if (err) throw err;
      console.log(`Token gravado em ${process.env.TOKEN_FILE_PATH}`);
    });
  }).catch(err => {
    console.error('Erro ao fazer a solicitação:', err);
  });