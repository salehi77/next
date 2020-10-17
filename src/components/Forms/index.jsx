import { useField } from 'formik'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import * as Yup from 'yup'


export const MyTextInput = ({ ...props }) => {

  const [field, meta] = useField(props)

  return (
    <>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        {...field}
        {...props}
        error={Boolean(meta.error) && meta.touched}
        helperText={meta.error && meta.touched ? meta.error : ''}
      // required
      // id='email'
      // label='Email Address'
      // name='email'
      // autoComplete='email'
      // autoFocus
      />
    </>
  )
}


export const MyCheckbox = ({ label, ...props }) => {

  const [field, meta] = useField({ ...props, type: 'checkbox' })

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            color='primary'
            {...field}
            {...props}
          />
        }
        label={label}
      />
    </>
  )
}


export const emailValid = Yup.string()
  .email('Invalid email addresss')

export const reqValid = Yup.string()
  .required('Required')

export const emailReqValid = Yup.string()
  .email('Invalid email addresss')
  .required('Required')

export const boolValid = Yup.boolean()
  .oneOf([true, false], 'Invalid value')

export const repassValid = (ref) => Yup.string()
  .oneOf([Yup.ref(ref)], 'Passwords must match')
  .required('Required')
