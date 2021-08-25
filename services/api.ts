import axios from "axios";
import { createHash } from "crypto";

const ts = new Date().getTime();
const apikey = process.env.MARVEL_PUBLIC_APIKEY;
const secretKey = process.env.MARVEL_SECRET_APIKEY;
const hash = createHash("md5").update(ts + secretKey + apikey).digest("hex");

export const api = axios.create({
  baseURL:"http://gateway.marvel.com/v1/public",
  params:{
    ts,
    apikey,
    hash
  }
})

export const apiPure = axios.create({
  params:{
    ts,
    apikey,
    hash
  }
})

