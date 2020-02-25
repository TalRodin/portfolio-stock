import React, {useEffect} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import {connect} from 'react-redux'
import Message from '../../components/UI/Message'
import styled from 'styled-components';



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
                       placeholder='Your email...' 
                       component={Input}
                       />
                <ErrorMessage name='email'/>
                <Field type='password'
                       name='password'
                       placeholder='Your password...'
                       component={Input} />
                <ErrorMessage name='password'/>
                <Button disabled={!isValid || isSubmitting} 
                        loading={loading ? 'Logging in...': null}
                        type="submit">
                    Login
                </Button>
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