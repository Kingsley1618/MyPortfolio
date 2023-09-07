'use clent'
import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { Result } from 'antd';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const { Option } = Select;

const initialValues = {
  name: '',
  number: '',
 
  companyName: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
 
  companyName: Yup.string().required('Company Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const FormPage = () => {
    const [result, setResult] = useState(false)
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Send the form data to Formspree
      fetch('https://formspree.io/f/xnqkvlgz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
        
          }
          console.log('Form submitted successfully', response);
          setResult(true);
        })
        .catch((error) => {
          console.error('Form submission error:', error);
        });
    },
  });

  return (
    <div className="px-[30px] py-[40px] shadow-2xl bg-white">
      <div className="max-w-[900px] w-[100%] mx-auto block">
        <h1 className="font-bold text-center text-[30px]">Contact Me for Job Opportunities</h1>
        <p className="text-center text-[14px] break-words font-bold text-[rgb(118,118,140)]">If you&apos;re interested in hiring me or discussing potential job opportunities, please feel free to get in touch by filling out the form below. I&apos;d love to hear from you!</p>

        {!result ? <Form
          onFinish={formik.handleSubmit}
          action="https://formspree.io/f/xnqkvlgz"
          method="POST"
        >
          <Form.Item
            label="Name"
            name="name"
            validateStatus={formik.errors.name ? 'error' : ''}
            help={formik.errors.name ? formik.errors.name : ''}
          >
            <Input {...formik.getFieldProps('name')} />
          </Form.Item>
          <Form.Item
            label="Number"
            name="number"
            validateStatus={formik.errors.number ? 'error' : ''}
            help={formik.errors.number ? formik.errors.number : ''}
          >
            <Input {...formik.getFieldProps('number')} />
          </Form.Item>
        
          <Form.Item
            label="Company Name"
            name="companyName"
            validateStatus={formik.errors.companyName ? 'error' : ''}
            help={formik.errors.companyName ? formik.errors.companyName : ''}
          >
            <Input {...formik.getFieldProps('companyName')} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            validateStatus={formik.errors.email ? 'error' : ''}
            help={formik.errors.email ? formik.errors.email : ''}
          >
            <Input {...formik.getFieldProps('email')} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-[grey]">
              Submit
            </Button>
          </Form.Item>
        </Form>
        : <Result
    status="success"
    title="Successfully Sent to Okeze Kingsley"
    subTitle="you will get a reply shortly, please wait."
   
  /> }
      </div>
    </div>
  );
};

export default FormPage;
