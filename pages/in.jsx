import React, { useEffect } from 'react'
import { Formik, Form, useField, useFormikContext } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const MyTextInput = ({ ...props }) => {

  const [field, meta] = useField(props)

  console.log(meta)

  return (
    <>
      <TextField
        {...field}
        {...props}
      />
    </>
  )
}

const MyCheckbox = ({ ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      {/* <label className='checkbox'>
        <input {...field} {...props} type='checkbox' />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null} */}
      <FormControlLabel
        control={<Checkbox
          {...field}
          {...props} />}
        label={props.lable}
      />
    </>
  )
}



// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          remember: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email addresss')
            .required('Required'),
          password: Yup.string()
            .required('Required'),
          remember: Yup.boolean()
            .oneOf([true, false], 'Invalid value'),
        })}
        onSubmit={(values) => {
          console.log('---------------------------')
          console.log(values)
        }}
      >
        <Form>
          <MyTextInput
            label='Email'
            name='email'
            type='text'
            placeholder='example@example.com'
          />
          <MyTextInput
            label='Password'
            name='password'
            type='text'
            placeholder='password'
          />
          <MyCheckbox
            lable='Remember Me'
            name='remember'
          />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  )
}

function App() {
  return <SignupForm />
}

export default App