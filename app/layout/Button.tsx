import { SignIn, SignUp, useSession } from "@clerk/nextjs";

const Button = () => {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <>
        <div>Loading...</div>
      </>
    );
        if(session) return (<button onClick={(e) => e.preventDefault()signOut()}}>Sign Out</button>)
  return <></>;
};

export default Button;
