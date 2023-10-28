import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="container flex justify-center align-middle">
    <SignIn />
  </div>;
}