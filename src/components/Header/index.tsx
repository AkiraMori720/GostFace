import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import * as S from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <h3>
            <span>&#60;</span>
            RB
            <span>&#62;</span>
          </h3>
        </S.Logo>

        <Switch
          className="switchTheme"
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={<S.IconMoon />}
          uncheckedIcon={<S.IconSun />}
          height={20}
          width={40}
          onColor={colors.themeBg}
          offColor={colors.themeBg}
          onHandleColor={colors.transparent}
          offHandleColor={colors.transparent}
        />
      </S.Content>
    </S.Container>
  );
};

export default Header;
