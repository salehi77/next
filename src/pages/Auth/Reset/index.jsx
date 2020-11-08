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
import { MyTextInput, MyCheckbox, emailReqValid, reqValid, repassValid } from '@components/Forms'
import api from '@services/api'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import useStyles from '../styles'


export default function Reset() {
  const classes = useStyles()
  const router = useRouter()


  return (
    <Layout>
      <Paper className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component='h1' variant='h5'>
          Forget Password
        </Typography>

        <Formik
          initialValues={{
            new_password: '',
            re_new_password: '',
          }}
          validationSchema={
            Yup.object({
              new_password: reqValid,
              re_new_password: repassValid('new_password'),
            })
          }
          onSubmit={(values) => {
            api.reset_password_confirm({ ...router.query, ...values })
              .then(() => {
                toast.success('Password Changed')
                // router.push('/')
              })
              .catch((err) => {
                toast.error('Something wrong')
              })
          }}
        >

          <Form className={classes.form}>

            <MyTextInput
              label='Password'
              name='new_password'
              type='password'
            />
            <MyTextInput
              label='Re-Password'
              name='re_new_password'
              type='password'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Reset Password
          </Button>

            <Grid container>
              <Grid item xs>
                <Link href='/signin'>Sing in</Link>
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