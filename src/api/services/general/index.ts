import useProviders from '../../providers';
import { trackPromise } from 'react-promise-tracker';

const useGeneralServices = () => {

  const { useGeneralProviders } = useProviders();
  const { getLanding } = useGeneralProviders();

  const getLandingService = (formId: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await trackPromise(getLanding(formId)));
      } catch (error) {
        reject(error);
      }
    });
  };

  return {
    getLandingService,
  };
};

export default useGeneralServices;
