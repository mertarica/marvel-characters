import axios from "axios";

const _publicKey = "3bb01b7e6474c17be4fadbbb4604c54c";
const _privateKey = "7b5652a73d414d24366d5e8f3981e3bf54ab473b";
const _hash = "2be8d75b0f564712ffb951e3e89c200d";

const publicKey = "0f37a0b32080035f16fdec4c059fffc3";
const privateKey = "e517242bfd60b6cd619b0be42a475fe02ae9929d";
const hash = "2368d98393dd0461dd4cc12de2881c86";

export default axios.create({
  baseURL: "https://gateway.marvel.com",
  headers: {
    "Content-type": "application/json",
  },
  params: {
    apikey: publicKey,
    hash: hash,
    ts: 1,
  },
});
