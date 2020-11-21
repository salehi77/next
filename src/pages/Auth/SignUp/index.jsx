import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import { toast } from 'react-toastify'
import Link from '@components/Link'
import Layout from '@layouts/Simple'
import { MyTextInput, MyCheckbox, emailReqValid, reqValid, repassValid } from '@components/Forms'
import useGlobalStyle from '@styles/global'
import useStyles from '../styles'
import clsx from 'clsx'
import api from '@services/api'


export default function SignUp() {
  const classes = useStyles()
  const classesBase = useGlobalStyle()

  return (
    <Layout>
      <Paper className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>

        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            re_password: '',
          }}
          validationSchema={
            Yup.object({
              firstname: reqValid,
              lastname: reqValid,
              email: emailReqValid,
              password: reqValid,
              re_password: repassValid('password'),
            })
          }
          onSubmit={(values) => {
            api.signup(values)
              .then(() => {
                toast.success('Activation email sent to your address', { autoClose: false })
                // router.push('/')
              })
              .catch(() => {
                toast.error('Something wrong')
              })
          }}
        >

          <Form className={classes.form}>


            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MyTextInput
                  label='First Name'
                  name='firstname'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MyTextInput
                  label='Last Name'
                  name='lastname'
                />
              </Grid>
              <Grid item xs={12}>
                <MyTextInput
                  label='Email'
                  name='email'
                />
              </Grid>
              <Grid item xs={12}>
                <MyTextInput
                  label='Password'
                  name='password'
                  type='password'
                />
              </Grid>
              <Grid item xs={12}>
                <MyTextInput
                  label='Re-Password'
                  name='re_password'
                  type='password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='/signin'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Form>

        </Formik>

      </Paper>

    </Layout>
  )
}