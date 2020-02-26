import React, {useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'
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
    float:center;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    border-radius: 0.7rem;
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
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
color: rgba(51,51,51,1) ;
display: flex;
position: relative;
align-items: center;
width: 100%;
flex-direction: column;
`;



//Login. The user need to provide the email and password to login. 

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
    password: Yup.string()
    .required('The password is required.')
    .min(8,'Too short.'),
})
const Login = ({login, loading, error, cleanUp}) =>{
    useEffect(()=>{
        return ()=>{
            cleanUp()
        }
    },[cleanUp])
    return (
        <div>
            <Formik
            initialValues={{
                email:'email',
                password:'password'
            }}
            validationSchema={LoginSchema}
            onSubmit={ async (values, {setSubmitting})=>
                {
                    await login(values)
                    setSubmitting(false)
                }
            }
            >{({isSubmitting, isValid})=>(
                <FormWrapper>
                <StyledForm>
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
                <ButtonWrapper disabled={!isValid || isSubmitting} 
                        loading={loading ? 'Logging in...': null}
                        type="submit">
                    Login
                </ButtonWrapper>
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
    error: auth.error
})
const mapDispatchToProps ={
    login: actions.signIn,
    cleanUp: actions.clean
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)