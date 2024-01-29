import { IAction } from './general.interface';
import useServices from '../../services';
import { getLanding } from '../../../redux/actions/general';

const useGeneralActions = () => {

  const { useGeneralServices } = useServices();
  const { getLandingService } = useGeneralServices();

  const actGetLanding = (formId: string) => async (dispatch: any) => {
    try {
      const res = await getLandingService(formId);
      const { data } = res;
      dispatch(getLanding(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    actGetLanding
  };
};

export default useGeneralActions;
