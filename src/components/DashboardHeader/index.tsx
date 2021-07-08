import React  from 'react';
import * as S from './styles';

interface Props {
  onConnect: Function
}


const Header: React.FC<Props> = ({onConnect}) => {

  return (
    <S.Container>
      <S.Content>
        <S.Logo className="float-none">
          <img src={"/images/logo.png"} alt={"logo"}/>
        </S.Logo>
        <a className="btn btn-primary get-started-btn" onClick={() =>onConnect()}>Connect</a>
      </S.Content>
    </S.Container>
  );
};

export default Header;
