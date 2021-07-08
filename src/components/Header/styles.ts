import styled from 'styled-components';
import { Moon } from '@styled-icons/boxicons-solid';
import { WbSunny } from '@styled-icons/material-rounded/';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  height: 56px;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1216px) {
    margin: 0 20px;
  }

  .switchTheme {
    display: flex;
    align-items: stretch;

    svg {
      height: 100%;
      margin: auto;
      display: flex;
      align-items: stretch;
    }
  }
`;

export const Logo = styled.div`
  h3 {
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const IconMoon = styled(Moon)`
  margin: 0;
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.colors.theme};
`;

export const IconSun = styled(WbSunny)`
  margin: 0;
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.colors.theme};
`;
