import styled from 'styled-components';

export const StyledIcon = styled.div<{ color?: string, iconSize?: string}>`
    ::before {      
        color: ${({ color }) => color};
        font-size: ${({ iconSize }) => iconSize};
    }
`;