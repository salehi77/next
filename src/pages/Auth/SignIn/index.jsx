import { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Link from '@components/Link'
import Layout from '@layouts/Simple'
import { MyTextInput, MyCheckbox, emailReqValid, reqValid } from '@components/Forms'
import api from '@services/api'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import useStyles from '../styles'


export default function SignIn() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <Layout>
      <Paper className={classes.paper}>

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
          }}
          validationSchema={
            Yup.object({
              email: emailReqValid,
              password: reqValid,
            })
          }
          onSubmit={(values) => {
            api.signin(values)
              .then(() => {
                toast.success('Sign in successfully')
                // router.push('/')
              })
              .catch(() => {
                toast.error('Something wrong')
              })
          }}
        >

          <Form className={classes.form}>

            <MyTextInput
              label='Email'
              name='email'
            />
            <MyTextInput
              label='Password'
              name='password'
              type='password'
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
                <Link href='/auth/forget'>Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link href='/signup'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>

          </Form>

        </Formik>

      </Paper>

    </Layout>
  )
}