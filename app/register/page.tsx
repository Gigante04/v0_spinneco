'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useToast from '@/components/ui/use-toast';
import Link from 'next/link';

export default function RegisterPage() {
  const { toast, showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate a register request
    try {
      // API call here
      showToast({
        title: 'Registration Successful',
        description: 'You have successfully registered!',
        variant: 'success',
      });
    } catch (error) {
      showToast({
        title: 'Registration Failed',
        description: 'There was an issue with your registration. Please try again.',
        variant: 'error',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6">
                Register
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Login
            </Link>
          </CardFooter>
        </Card>
      </main>

      {/* Toast Display */}
      {toast && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded shadow-lg ${
            toast.variant === 'success'
              ? 'bg-green-500 text-white'
              : toast.variant === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-white'
          }`}
        >
          <strong>{toast.title}</strong>
          <p>{toast.description}</p>
        </div>
      )}

      <Footer />
    </div>
  );
}
