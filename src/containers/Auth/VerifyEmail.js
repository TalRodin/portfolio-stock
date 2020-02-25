import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Button from '../../components/UI/Button'
import * as actions from '../../store/actions'
import authReducer from '../../store/reducers/authReducer'
import Message from '../../components/UI/Message'


const VerifyEmail = ({sendVerification, error, loading, cleanUp}) =>{
    useEffect(()=>{
        return ()=>{
            cleanUp()
        }
    }, [cleanUp])

    return (
        <div>
            Verify your email.
            Go to your email inbox and please verify your email.
            <Button disabled={loading} loading={loading?'Sending email...':null} onClick={()=>sendVerification()}>Re-send verification email</Button>
            <Message show={error}>{error}</Message>
            <Message show={error===false}>Message sent successfully</Message>
        </div>
    )
}

const mapStateToProps = ({auth})=>({
    loading: auth.verifyEmail.loading, 
    error: auth.verifyEmail.error
    
})
const mapDispatchToProps={
    sendVerification:actions.verifyEmail,
    cleanUp: actions.clean
}

export default connect(mapStateToProps,mapDispatchToProps)(VerifyEmail)