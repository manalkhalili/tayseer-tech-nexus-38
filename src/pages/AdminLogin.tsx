
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormValues = z.infer<typeof formSchema>;

// Mock credentials - in a real app these would be verified against a database
const MOCK_CREDENTIALS = {
  'admin@example.com': { password: 'admin123', role: 'admin' },
  'editor@example.com': { password: 'editor123', role: 'editor' },
  'viewer@example.com': { password: 'viewer123', role: 'viewer' },
};

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    
    // Mock authentication - simulate network delay
    setTimeout(() => {
      const userCredentials = MOCK_CREDENTIALS[data.email as keyof typeof MOCK_CREDENTIALS];
      
      if (userCredentials && userCredentials.password === data.password) {
        // Store token and role in localStorage
        localStorage.setItem('admin_token', 'mock-jwt-token');
        localStorage.setItem('admin_role', userCredentials.role);
        
        toast.success('Login successful');
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img src="/lovable-uploads/5ff76fb1-f0b4-4556-9464-820a5130a055.png" alt="Logo" className="h-20 object-contain" />
          </div>
          <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input 
                      placeholder="admin@example.com" 
                      type="email" 
                      disabled={isLoading}
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input 
                      placeholder="•••••••" 
                      type="password" 
                      disabled={isLoading}
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 border-t p-4">
          <div className="text-sm text-muted-foreground text-center">
            Demo Accounts:
          </div>
          <div className="text-xs text-muted-foreground grid grid-cols-3 gap-2 w-full">
            <div>
              <div className="font-medium">Admin</div>
              <div>admin@example.com</div>
              <div>admin123</div>
            </div>
            <div>
              <div className="font-medium">Editor</div>
              <div>editor@example.com</div>
              <div>editor123</div>
            </div>
            <div>
              <div className="font-medium">Viewer</div>
              <div>viewer@example.com</div>
              <div>viewer123</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;
