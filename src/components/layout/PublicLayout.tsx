import React from 'react'
import useHelpers from '../../helpers/datalayers';
import { LayoutProps } from './Layout.interfaces';

export const PublicLayout = ({ children }: LayoutProps): JSX.Element => {

    const { useDatalayersConfig } = useHelpers();
    useDatalayersConfig();

    return (
        <>
          <main>{children}</main>
        </>
    )
}
