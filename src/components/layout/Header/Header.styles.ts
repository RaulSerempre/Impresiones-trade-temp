import styled from 'styled-components';

export const StyledHeader = styled.div<{ backgroundColor?: string }>`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;