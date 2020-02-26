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

const ButtonWrapper=styled.button`
    float:left;
    @import url('https://fonts.googleapis.com/css?family=Lato');
    color: rgba(51,51,51,1);
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border: 0;
    outline: 0;
    position:fixed;
    border-radius: 3px;
    margin-left:12%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledForm = styled(Form)`
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

//Here we are able to buy the stock. By submitting the required information. 

const StockSchema=Yup.object().shape({
    symbol:Yup.string().required('The symbol is required'),
    quantity: Yup.number().integer('The quantity must be the whole number').required('The quantity is required'),
    price:Yup.number().required('The price is required')
})
const AddSymbol = ({addSymbol, loading, error}) =>{
    const [isOpened, setisOpened] = useState(false);
    return (
        <>
        <ButtonWrapper onClick={() => setisOpened(true)}>
            Buy stock
        </ButtonWrapper>
        <Modal opened={isOpened} close={() => setisOpened(false)}>
        <Formik
        initialValues={{
            symbol:'',
            quantity:'',
            price:''
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
export default connect(mapStateToProps, mapDispatchToProps)(AddSymbol)