import styled, { keyframes } from 'styled-components';

const IGCoreSpinnerSpin12 = keyframes `
    animation-duration: 1.2s;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
    animation-name: IGCoreSpinnerSpin12;
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const LoadingWheelsSvg = styled.svg `
    animation: ${IGCoreSpinnerSpin12} 1.2s steps(12) infinite;
`;