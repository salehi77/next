import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import useStyles from './style'
import Link from '@components/Link'
import BaseLayout from '@layouts/Base'
import { MyTextInput, MyCheckbox, emailReqValid, reqValid } from '@components/Forms'

export default function SignIn() {
  const classes = useStyles()

  return (
    <BaseLayout>

      <div className={classes.paper} >

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>

        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={
            Yup.object({
              email: emailReqValid,
              password: reqValid
            })
          }
          onSubmit={(values) => { }}
        >

          <Form className={classes.form}>

            <MyTextInput
              label='Email'
              name='email'
            />

            <MyTextInput
              label='Password'
              name='password'
            />

            <MyCheckbox
              label='Remember Me'
              name='remember'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign In
          </Button>

            <Grid container>
              <Grid item xs>
                <Link href='/forget'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href='/signup'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>

          </Form>

        </Formik>

      </div>

    </BaseLayout >
  )
}