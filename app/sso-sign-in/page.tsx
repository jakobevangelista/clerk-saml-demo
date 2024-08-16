"use client";

import * as React from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OauthSignIn() {
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();

  if (!signIn || !signUp) return null;

  const signInWith = (e: React.FormEvent) => {
    e.preventDefault();

    const email: string = (e.target as HTMLFormElement).email.value;

    signIn
      .authenticateWithRedirect({
        identifier: email,
        strategy: "saml",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/protected",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err.errors);
        console.error(err, null, 2);
      });
  };

  // Render a button for each supported SAML provider
  // you want to add to your app
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Login With Enterprise SSO</CardTitle>
      </CardHeader>
      <form onSubmit={(e) => signInWith(e)}>
        <CardContent>
          <Input type="email" name="email" placeholder="Enter email address" />
        </CardContent>
        <CardFooter>
          <Button>Sign in with SAML</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
