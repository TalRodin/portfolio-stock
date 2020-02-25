import React,{useState} from 'react'
import {connect} from 'react-redux'
import Modal from '../components/UI/Modal'
import Button from '../components/UI/Button'
import {Formik, Field, Form, isInteger} from 'formik'
import Input from '../components/UI/Input'
import Message from '../components/UI/Message'
import * as Yup from 'yup'
import * as actions from '../store/actions'



const StockSchema=Yup.object().shape({
    // todo: Yup.string().required('The symbol is required'),
    symbol:Yup.string().required('The symbol is required'),
    quantity: Yup.number().integer().required('The quantity is required'),
    price:Yup.number().required('The quantity is required')
})


const AddSymbol = ({addSymbol, loading, error}) =>{
    const [isOpened, setisOpened] = useState(false);
    return (
        <>
        <Button onClick={() => setisOpened(true)}>
         Buy stock
        </Button>

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
                <Form>
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
                </Form>
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