import React from 'react';
import { ReactLogo } from '@styled-icons/fa-brands';

import * as S from './styles';

import Input from '~/components/Input';
import Button from '~/components/Button';

const Home: React.FC = () => {
  return (
    <S.Container>
      <h1>Hello World</h1>

      <Input name="email" icon={ReactLogo} placeholder="Digite algo..." />

      <Button>Button</Button>
    </S.Container>
  );
};

export default Home;
