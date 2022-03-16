require('dotenv').config()

const twilio = require('twilio');

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const REGISTERED_PHONE_NUMBER = process.env.TWILIO_REGISTERED_PHONE_NUMBER;

const client = twilio(ACCOUNT_SID, AUTH_TOKEN);

const phone = {
  country: 55,
  ddd: 16,
  number: 00000000
}

client.messages.create({
  from: `whatsapp:+${REGISTERED_PHONE_NUMBER}`,
  body: 'Outra mensagem de teste!',
  to: `whatsapp:+${phone.country}${phone.ddd}${phone.number}`
}).then((message) => console.log(message.sid));
