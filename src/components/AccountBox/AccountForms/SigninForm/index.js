import React, {useContext} from 'react';
import {BoldLink, BoxContainer, FormContainer, ValidsionWarnnig,
  Input, MutedLink, SubmitButton, MrginSpanHeight} from '../AccountForms.style'
import {AccountContext} from '../../AccountBox.logic'
import AccountApi from '../../Account.Api';

//validastion 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useSigninSchema} from '../../../../validation/SignupValidation'

export function SigninForm(props) {
    // context - swich to signin
    const {swichToSignin} = useContext(AccountContext)

    // account api - post:
    const {submitForm} = AccountApi();
    
    // Valdation state from useSigninSchema (schema)
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(useSigninSchema),
  })
  
    return (
        <BoxContainer>
          <MrginSpanHeight height='15px'/>
          <FormContainer  onSubmit={handleSubmit(submitForm)}>
            <Input type='text' placeholder='User Name' name='userName' {...register("userName")} />
            <ValidsionWarnnig> {errors.userName?.message} </ValidsionWarnnig>
            <MrginSpanHeight height='6px'/>
            <Input type='email' placeholder='Email' name='email' {...register("email")}/>
            <ValidsionWarnnig> {errors.email?.message} </ValidsionWarnnig>
            <MrginSpanHeight height='6px'/>
            <Input type='password' placeholder='Password' name='password' {...register("password")}/>
            <ValidsionWarnnig> {errors.password?.message} </ValidsionWarnnig>
            <MrginSpanHeight height='6px'/>
            <Input type='password' placeholder='Confirm Password' name='confirmPassword' {...register("confirmPassword")}/>
            <ValidsionWarnnig> {errors.confirmPassword?.message} </ValidsionWarnnig>
            <MrginSpanHeight height='15px'/>
            <SubmitButton type='submit'>Signup</SubmitButton>
          </FormContainer>
          <MrginSpanHeight height='5px'/>
          <MutedLink href='#'>
            Already have an account?
            <BoldLink onClick={swichToSignin}>
              Signin
            </BoldLink>
          </MutedLink>
        </BoxContainer>
    );
}

