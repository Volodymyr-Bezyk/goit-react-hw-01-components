import styled from 'styled-components';

export const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    display: block;
    background-color: ${({ children, theme }) =>
      children ? theme.colors.green : theme.colors.red};

    width: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[4]}px;
    border-radius: ${p => p.theme.radii.circle};
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
export const Avatar = styled.img`
  display: block;
  margin-right: ${p => p.theme.space[4]}px;
`;
export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
