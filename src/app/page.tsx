'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {

     const { 
        data: session, 
    } = authClient.useSession() 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    }, {
      onError: () => {
       window.alert('Error signing up');
      },
      onSuccess: () => {
        window.alert('Successfully signed up');
      }
    });
  }



   const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    }, {
      onError: () => {
       window.alert('Error signing up');
      },
      onSuccess: () => {
        window.alert('Successfully signed up');
      }
    });
  }

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.name}!</h1>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10">
 
    </div>
  )
}