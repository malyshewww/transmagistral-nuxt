import ajax from "../ajax";

const useAjax = async (options) => {
   const axios = await ajax();
   const response = await axios.post(
      `/webform_rest/submit?_format=json`,
      options
   );
   return response;
};

export default useAjax;
