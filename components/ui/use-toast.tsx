'use client';

import { useToast } from '@chakra-ui/react';
import { useState } from 'react';

function ExampleComponent() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your login logic here

    // On success
    toast({
      title: 'Login successful.',
      description: "You've successfully logged in.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // On error
    toast({
      title: 'An error occurred.',
      description: 'Unable to login. Please try again.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
       
