'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);
  function onSubmit(data) {
    if (sendEmail) {
      sendEmail(data).then(() => {
        setCountdown(3);
        setModalVisible(true);

      })
      .catch(error => {
        console.error('Failed to send email:', error);
        // Handle any errors here, possibly updating the UI to notify the user
      });
    } else {
      console.error('sendEmail function is not defined.');
    }
  }
  useEffect(() => {
    if (!modalVisible) return;
  
    // Only set the timeout if the countdown is greater than 0
    const timer = countdown > 0 && setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);
  
    // Redirect or close the modal when countdown reaches 0
    if (countdown === 0) {
      setModalVisible(false);
      // Optionally redirect or perform another action
      // window.location.href = '/contact'; // Redirect to the contact page
    }
  
    return () => clearTimeout(timer);
  }, [modalVisible, countdown]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className='mb-2'>
        <label htmlFor='name' className='mb-3  block text-base  text-primary-800 font-bold'>
          Full Name
        </label>
        <input
          type='text'
          placeholder='Full Name'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-600 focus:shadow-md'
          {...register('name', { required: 'Full name is required' })}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className='mb-5'>
        <label htmlFor='email' className='mb-3 block text-base  text-primary-800 font-bold'>
          Email Address
        </label>
        <input
          type='email'
          placeholder='example@domain.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-600 focus:shadow-md'
          {...register('email', { required: 'Email address is required' })}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className='mb-5'>
        <label htmlFor='message' className='mb-3 block text-base  text-primary-800 font-bold'>
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-primary-600 focus:shadow-md'
          {...register('message', { required: 'Message is required' })}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button type='submit' className='z-50 px-6 py-2 bg-primary-600 text-white hover:bg-transparent border-2 border-transparent hover:border-primary-600 hover:text-primary-600'>
        Submit
      </button>

      {modalVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1050
        }}>
          <div style={{ backgroundColor: 'white', padding: '20px', zIndex: 1051 }}>
            <p>Thank you for your message!</p>
            <p>Redirecting to the contact page in {countdown} seconds.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default Contact;
