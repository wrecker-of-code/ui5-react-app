import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  FormItem,
  Button,
  ButtonType,
  Label,
  Input,
  InputType,
  Card,
  CardHeader,
} from '@ui5/webcomponents-react';
import { spacing } from '@ui5/webcomponents-react-base';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // check if email and password are valid
    // if valid, redirect to home page
    // if not valid, show error message
    e.preventDefault();
    console.log('email: ', email);
    navigate('/');
  };

  return (
    <div className="flex flex-row justify-center">
      <Card
        header={<CardHeader titleText="HR Onboarding App" />}
        className="max-w-md w-full text-center"
        style={spacing.sapUiContentPadding}
      >
        <Form
          onSubmit={handleSubmit}
          style={{
            ...spacing.sapUiContentPadding,
            paddingTop: '0',
          }}
        >
          <FormGroup titleText="Login to your account">
            <FormItem label={<Label required>Email</Label>}>
              <Input
                name="email"
                required
                type={InputType.Email}
                value={email}
                onInput={handleEmailInput}
                className="w-full -mt-1"
              />
            </FormItem>
            <FormItem label={<Label required>Password</Label>}>
              <Input
                name="password"
                required
                type={InputType.Password}
                value={password}
                onInput={handlePasswordInput}
                className="w-full -mt-1"
              />
            </FormItem>
            <FormItem>
              <Button
                type={ButtonType.Submit}
                style={{
                  backgroundColor:
                    ThemingParameters.sapButton_Emphasized_Background,
                }}
                className="text-white"
              >
                Submit
              </Button>
            </FormItem>
          </FormGroup>
        </Form>{' '}
      </Card>
    </div>
  );
};

export default LoginForm;
