import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";
import { Suspense } from "react";

export default async function SignIn() {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <Suspense>
        <GoogleButton />
      </Suspense>
      <div>or</div>
      <SignInForm />
    </div>
  );
}
