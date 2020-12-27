import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import {
  Button,
  RadioGroup,
  FormControlLabel,
  makeStyles,
  withStyles,
  Radio,
  Typography,
  FormControl,
  MenuItem,
  Grid
} from '@material-ui/core';
import RatingComponent from './RatingComponent';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  formControl: {
    minWidth: 200
  }
}));

const GenerateForm = ({ input }) => {
  const classes = useStyles();
  const obj = {};

  let [ratingValue, setRatingValue] = useState(0);
  const getRatingValue = data => {
    setRatingValue(data);
  };
  const renderQuestion = isSubmitting => {
    console.log(input, 'input');
    if (input) {
      return input.map(question => {
        switch (question.questionType) {
          case 'rating':
            return (
              <span key={'rating' + question.questionName}>
                <RatingComponent
                  label={question.label}
                  value={getRatingValue}
                  name={question.questionName}
                />
              </span>
            );
          case 'text':
            return (
              <div key={'text' + question.questionName + '1'}>
                <Field
                  component={TextField}
                  color="primary"
                  name={question.questionName}
                  id={question.questionName}
                  type="text"
                  label={question.label}
                />
                <br />
                <br />
              </div>
            );
          case 'textarea':
            return (
              <div key={'textarea' + question.questionName}>
                <Field
                  component={TextField}
                  color="primary"
                  name={question.questionName}
                  id={question.questionName}
                  type="text"
                  variant="outlined"
                  multiline
                  rows={question.additionalConfig.rows}
                  label={question.label}
                  style={{ width: '100%' }}
                />
                <br />
                <br />
              </div>
            );
          case 'checkbox':
            return (
              <div key={'checkbox' + question.name}>
                <Typography>{question.label}</Typography>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  {question.options.map((option, index) => (
                    <Grid item key={'option' + option.value}>
                      <Field
                        component={CheckboxWithLabel}
                        type="checkbox"
                        name={option.value}
                        color="primary"
                        defaultValue={false}
                        Label={{ label: option.label }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            );
          case 'radio':
            return (
              <>
                <Field
                  component={RadioGroup}
                  name={question.questionName}
                  key={'radio' + question.name}
                >
                  <Typography>{question.label}</Typography>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
                    {question.options.map((option, index) => (
                      <Grid item key={'option' + option.value}>
                        <FormControlLabel
                          value={option.value}
                          control={<Radio disabled={isSubmitting} />}
                          label={option.label}
                          disabled={isSubmitting}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Field>
              </>
            );
          case 'select':
            return (
              <>
                <FormControl
                  className={classes.formControl}
                  key={'select' + question.name}
                >
                  <Field
                    component={TextField}
                    type="text"
                    name={question.questionName}
                    id={question.questionName}
                    select={true}
                    label={question.label}
                    variant="outlined"
                    size="medium"
                  >
                    {question.options.map((option, index) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  </Field>
                </FormControl>
                <br />
              </>
            );
          default:
            return null;
        }
      });
    }
  };
  return (
    <>
      <div>
        <Formik
          initialValues={obj}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <br />
              {renderQuestion(isSubmitting)}

              {isSubmitting}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ display: 'none' }}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default GenerateForm;
