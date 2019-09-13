import React, { Component } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}
export default SignIn;
