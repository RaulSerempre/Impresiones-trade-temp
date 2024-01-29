import styled from 'styled-components';

export const StyledNetworkTitle = styled.div<{ color?: string }>`
    color: ${({ color }) => color};
`;

export const StyledLinkSection = styled.div<{ backgroundColor?: string}>`
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledTermsSection = styled.div<{ borderColor?: string }>`
    border-color: ${({ borderColor }) => borderColor};
`;

export const StyledLinkTitle = styled.a<{ color?: string }>`
    color: ${({ color }) => color};
`;

export const StyledLink = styled.a<{ color?: string }>`
    color: ${({ color }) => color};
`;

export const StyledLegalAlert = styled.div<{ 
    color?: string,
    backgroundColor?: string
}>`
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledBelowDisclaimer = styled.div<{ 
    color?: string,
    backgroundColor?: string
}>`
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledPqrSection = styled.div<{ 
    color?: string,
    backgroundColor?: string
}>`
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledPqrContent = styled.div<{ 
    color?: string,
    backgroundColor?: string
}>`
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledCopyright = styled.a<{ 
    color?: string,
}>`
    color: ${({ color }) => color};
`;