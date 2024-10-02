import axios from "axios";
let singleton = null; // a singleton instance of axios that the default init function returns

export default async () => {
   const runtimeConfig = useRuntimeConfig();
   if (!singleton) {
      const tokenURL =
         runtimeConfig.public.apiBase + "/session/token?_format_json";
      try {
         const response = await axios.get(tokenURL, {
            // mode: 'no-cors',
            withCredentials: true, // required to send auth cookie
         });
         const csrf_token = response.data;
         singleton = axios.create({
            // mode: 'no-cors',
            baseURL: runtimeConfig.public.apiBase, // every request is relative to this URL
            withCredentials: true, // include auth cookie in every request
            headers: {
               "X-CSRF-Token": csrf_token,
               Accept: "application/json, text/plain, */*",
               "Content-Type": "application/json",
            }, // include this header in every request
            // params: { _format: 'json' }, // add these query params to every request
         });
      } catch (error) {
         console.log("ajax error");
      }
   }
   return singleton;
};
