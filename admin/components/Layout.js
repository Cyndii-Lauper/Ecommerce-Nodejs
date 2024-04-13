import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";

export default function Layout({children}) {
  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center"> // color blue in login page
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with google</button>
      </div>
    </div>
    );
  }
 
  return (
    // color blue in home page
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
    </div>
  );
}
