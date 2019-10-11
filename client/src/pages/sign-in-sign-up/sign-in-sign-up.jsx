import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
import { SignInSignOutContainer } from './sign-in-sign-out.styles';

const SignInSignOutPage = () => (
  <SignInSignOutContainer>
    <SignIn />
    <SignUp />
  </SignInSignOutContainer>
);

export default SignInSignOutPage;
