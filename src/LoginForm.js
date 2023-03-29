import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <Field
                as={TextField}
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" fontSize="small" />
                  ),
                }}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <Lock color="action" fontSize="small" />
                  ),
                }}
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;