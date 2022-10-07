import styled from 'styled-components';

export const FriendListStyle = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
`;
export const FriendListItemStyle = styled.li`
  display: inline-flex;
  width: ${p => p.theme.sizes.min};
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  border: 1px solid ${p => p.theme.colors.bg};
  background-color: ${p => p.theme.colors.bg};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;
