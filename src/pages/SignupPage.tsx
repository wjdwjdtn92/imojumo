import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormBox from '../components/LoginSignupForm/Form';
import MainContainer from '../styles/layout';
import validate from '../utils/auth/signupValidate';
import useSignup from '../hooks/auth/useSignup';

function SignupPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [displayError, setDisplayError] = useState('');

  const { mutate: signupMutate } = useSignup({
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      console.log(error);
      setDisplayError(String(error.message));
    },
  });

  const handleSignup = async (
    email: string,
    password: string,
    checkPassword: string,
  ) => {
    if (validate(email, password, checkPassword, setDisplayError)) {
      signupMutate({ email, password });
    }
  };

  return (
    <PageContainer>
      <TextVectorContainer>
        <p>이모저모에 오신 것을 환영합니다.</p>
        <p>자유롭게 토론해보세요.</p>
        <Img alt="bookLogo" src="src/assets/bookVector.png" />
      </TextVectorContainer>
      <FormBox
        pathname={pathname}
        displayError={displayError}
        onSubmit={handleSignup}
      />
    </PageContainer>
  );
}

const PageContainer = styled(MainContainer)`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
`;

const TextVectorContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--font-size-xxl);

  p {
    margin-bottom: 5px;
  }
`;

const Img = styled.img`
  width: 210px;
  height: 185px;
`;

export default SignupPage;
