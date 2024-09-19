import axios from "axios";
import config from "./config";
let singleton = null; // a singleton instance of axios that the default init function returns

export default async () => {
   if (!singleton) {
      const tokenURL = config.drupal_url + "/session/token?_format_json";
      try {
         const response = await axios.get(tokenURL, {
            // mode: 'no-cors',
            withCredentials: true, // required to send auth cookie
         });
         const csrf_token = response.data;
         singleton = axios.create({
            // mode: 'no-cors',
            baseURL: config.drupal_url, // every request is relative to this URL
            withCredentials: true, // include auth cookie in every request
            headers: { "X-CSRF-Token": csrf_token }, // include this header in every request
            // params: { _format: 'json' }, // add these query params to every request
         });
      } catch (error) {
         console.log("ajax error");
      }
   }
   return singleton;
};