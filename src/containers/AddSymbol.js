import React,{useState} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/UI/Modal'
import Button from '../components/UI/Button'
import {Formik, Field, Form, isInteger} from 'formik'
import Input from '../components/UI/Input'
import Message from '../components/UI/Message'
import * as Yup from 'yup'
import * as actions from '../store/actions'
import styled from 'styled-components';

const ButtonWrap=styled.div`
float:right;
display:fixed
margin-right:10px;
@import url('https://fonts.googleapis.com/css?family=Lato');
color: #61677C;
font-weight: 600;
text-transform: uppercase;
font-family: 'Lato', sans-serif;
font-weight: bold;
font-size: 11px;
box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
transition: all 0.2s ease-in-out;
cursor: pointer;
border: 0;
outline: 0;
border-radius: 5px;

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
//   background-color: #f7f7f7;;
//   box-shadow:
// -2.3px -2.3px 3.8px rgba(255,255,255, 0.2),
// -6.3px -6.3px 10.6px rgba(255,255,255, 0.3),
// -15.1px -15.1px 25.6px rgba(255,255,255, 0.4),
// -50px -50px 85px rgba(255,255,255, 0.07),
// 2.3px 2.3px 3.8px rgba(0, 0, 0, 0.024),
// 6.3px 6.3px 10.6px rgba(0, 0, 0, 0.035),
// 15.1px 15.1px 25.6px rgba(0, 0, 0, 0.046),
// 50px 50px 85px rgba(0, 0, 0, 0.07);
`;

const StyledForm = styled(Form)`
display: flex;
position: relative;
align-items: center;
width: 100%;
flex-direction: column;
`;



const StockSchema=Yup.object().shape({
    // todo: Yup.string().required('The symbol is required'),
    symbol:Yup.string().required('The symbol is required'),
    quantity: Yup.number().integer('The quantity must be the whole number').required('The quantity is required'),
    price:Yup.number().required('The price is required')
})


const AddSymbol = ({addSymbol, loading, error}) =>{
    const [isOpened, setisOpened] = useState(false);
    return (
        <>
        {/* <ButtonWrap> */}
        <ButtonWrap onClick={() => setisOpened(true)}>
         Buy stock
        </ButtonWrap>
        {/* </ButtonWrap> */}
      <Modal opened={isOpened} close={() => setisOpened(false)}>
        <Formik
        initialValues={{
            symbol:'',
            quantity:'',
            price:''
            // todo:''
        }}
        validationSchema={StockSchema}
        onSubmit={async (values,{setSubmitting, resetForm})=>{
            const res = await addSymbol(values)
            setSubmitting(false)
            if(res){
                setisOpened(false)
            }
            resetForm()
        }}
        >
            {({isSubmitting, isValid})=>(
                <FormWrapper>
                    <StyledForm>
                    <Field
                        type='text'
                        name='symbol'
                        placeholder='Symbol...'
                        component={Input}
                    />
                    <Field
                        type='number'
                        name='quantity'
                        placeholder='Quantity...'
                        component={Input}
                    />
                    <Field
                        type='number'
                        name='price'
                        placeholder='Price...'
                        component={Input}
                    />
                    <div>
                    <Button
                    
                    type='submit'
                    disabled={!isValid || isSubmitting}
                    loading={loading ? 'Adding...': null}
                    >
                        Submit order
                    </Button>
                    <Button
               
                    onClick={()=>setisOpened(false)}
                    >
                        Cancel
                    </Button>
                    </div>

        <div>
          <Message show={error}>
            {error}
          </Message>
        </div>
        </StyledForm>
                </FormWrapper>
            )}
        </Formik>
      </Modal>
        </>
    )
}

const mapStateToProps = ({symbols})=>({
    loading:symbols.loading,
    error:symbols.error
})
const mapDispatchToProps = {
    addSymbol:actions.addSymbol
}



export default connect(mapStateToProps, mapDispatchToProps)(AddSymbol )