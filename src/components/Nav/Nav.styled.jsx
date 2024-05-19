import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: rgba(18, 20, 23, 1);
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1.28px;
  text-decoration: none;

  &:hover {
    color: blue;
  }

`;