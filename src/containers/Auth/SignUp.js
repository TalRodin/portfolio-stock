import React, {useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import {connect} from 'react-redux'
import * as actions from '../../store/actions'
import Message from '../../components/UI/Message'
import styled from 'styled-components';
const ButtonWrapper=styled.button`
      @import url('https://fonts.googleapis.com/css?family=Lato');
      color:#f1555a;
      text-transform: uppercase;
      font-family: 'Lato', sans-serif;
      font-weight: bold;
      box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      border: 0;
      outline: 0;
      width:30%;
      border-radius: 50px;
      padding:16px;
      background-color:#f7f7f7;
      text-shadow: 1px 1px 0 #FFF;
      &:hover {
        box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
      }

      &:active {
        box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
      }
`
const FormWrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  border-radius: 0.7rem;
  padding: 8rem 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;;
  box-shadow:
-2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
-6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
-15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
-50px -50px 85px rgba(255,255,255, 0.07),
2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
50px 50px 85px rgba(0, 0, 0, 0.07);
`;

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
  
`;

const SignUpSchema = Yup.object().shape({
    firstName:Yup.string().required('Your first name is required')
    .min(3,'Too short').max(25, 'Too long'),
    lastName: Yup.string().required('Your last name is required')
    .min(3,'Too short').max(25, 'Too long'),
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required.').min(8,'The password is too short'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),null], 'Password does not match')
    .required('You need to confirm your password.')
})

const SignUp = ({signUp, loading, error, cleanUp}) =>{
    useEffect(()=>{
        return()=>{
            cleanUp()
        }
    },[cleanUp])
    console.log(error)
    return (
        <div>
            <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'email',
                password:'password',
                confirmPassword: ''
            }}
            validationSchema={SignUpSchema}
            onSubmit={
                async( values, {setSubmitting})=>
                {
                    console.log(values)
                    await signUp(values)
                    setSubmitting(false) 
                }
            
            }
            >{({isSubmitting, isValid})=>
            
            (
                <FormWrapper>
                <StyledForm>
                <Field type='firstName'
                       name='firstName'
                       placeholder='Your First Name...' 
                       component={Input}
                       />
                <ErrorMessage name='firstName'/>
                <Field type='lastName'
                       name='lastName'
                       placeholder='Your Last Name...' 
                       component={Input}
                       />
                <ErrorMessage name='lastName'/>
                <Field type='email'
                       name='email'
                       placeholder='Your Email...' 
                       component={Input}
                       />
                <ErrorMessage name='email'/>
                <Field type='password'
                       name='password'
                       placeholder='Your Password...'
                       component={Input} />
                <ErrorMessage name='password'/>
                <Field type='password'
                       name='confirmPassword'
                       placeholder='Confirm Password...'
                       component={Input} />
                <ErrorMessage name='confirmPassword'/>


                <ButtonWrapper disabled={!isValid || isSubmitting} loading={loading ? 'Signing up' : null} type="submit">SignUp</ButtonWrapper>
                <Message >{error}</Message>
            </StyledForm>
            </FormWrapper>
            )}
            
           
            </Formik>
        </div>
    )
}
const mapStateToProps = ({auth}) =>({
    loading:auth.loading,
    error:auth.error

})
const mapDispatchToProps ={
    signUp: actions.signUp,
    cleanUp: actions.clean
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)