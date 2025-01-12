import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import toast from 'react-hot-toast';


const ContactForm = () => {
  const { t } = useTranslation('common');
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: values => {

      axios.post('/api/admin/contacts', {
        name: values.username,
        email: values.email,
        phone: values.phoneNumber,
        message: values.message,

      }).then((res) => {
        console.log(res.data)
        if (res.data.status === 'true') {
          formik.resetForm();
          toast.success(res.data.msg)

        } else {
          alert(res.data.msg)
        }

      })

    },
  });

  return (
    <section className="bg-white dark:bg-gray-900 py-16" id="contact_us">
      <div className="px-6 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight sm:text-5xl">
          {t('contact-us')}
        </h2>
        <p className="mb-12 text-center text-lg text-gray-500 dark:text-gray-400 sm:text-xl">
          {t('have-questions-or-need-support?')}
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {t('name')}
            </label>
            <input
              type="text"
              id="username"
              {...formik.getFieldProps('username')}
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Name"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-sm mt-2">{formik.errors.username}</div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {t('phone-number')}
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...formik.getFieldProps('phoneNumber')}
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Phone Number"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm mt-2">{formik.errors.phoneNumber}</div>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              {t('your-message')}
            </label>
            <textarea
              id="message"
              {...formik.getFieldProps('message')}
              className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-2">{formik.errors.message}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {t('send-message')}
          </button>
        </form>
      </div>
    </section>

  );
};

export default ContactForm;
