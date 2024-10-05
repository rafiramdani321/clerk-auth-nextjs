import { auth, currentUser } from "@clerk/nextjs/server"
import Header from "./components/Header";


export default async function Home() {
  const user = await currentUser();
  return (
    <>
      <Header />
      <div className="px-5">
        <h1 className="font-semibold mt-5">Welcome {user?.firstName + ' ' + user?.lastName}</h1>
      </div>
    </>
  )
}
