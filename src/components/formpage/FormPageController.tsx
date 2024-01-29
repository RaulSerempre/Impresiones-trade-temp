import { useEffect } from 'react';
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import useActions from '../../api/actions';

export const FormPageController = () => {

    const {
        dispatch,
        useGeneralActions
    } = useActions();

    const { actGetLanding } = useGeneralActions();

    const { formId } = useParams();
    
    useEffect(() => {
        dispatch(
            actGetLanding(formId)
        );
        // eslint-disable-next-line
    }, [formId])

    const buttonInformation = useSelector((state: RootState) => state?.general?.landing, shallowEqual);

    return {
        buttonInformation
    };

}
