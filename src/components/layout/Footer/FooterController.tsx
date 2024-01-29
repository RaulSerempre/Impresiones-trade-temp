import { useEffect, useState } from 'react';

export const FooterController = () => {

    const [accordionClass, setAccordionClass] = useState('close');
    const [accordionStatus, setAccordionStatus] = useState(false);

    const onClick = () => {
        setAccordionStatus(!accordionStatus)
    }

    useEffect(() => {
        if(accordionStatus) {
            setAccordionClass('open')
        }
        else {
            setAccordionClass('close')
        }
        // eslint-disable-next-line
    }, [accordionStatus])

    useEffect(() => {
        // eslint-disable-next-line
    }, [accordionClass])

    return {
        accordionClass,
        onClick
    };

}
