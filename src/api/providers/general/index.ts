import axios from 'axios';

const useGeneralProviders = () => {

  const getLanding = (formId: string): Promise<any> => {
    return axios({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_API_SCRAPI}/paco/pages/${formId}`,
    });
  };

  return {
    getLanding
  };
};

export default useGeneralProviders;
