"use client"
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  interface user {
    name: string;
    id: number;
  }

  const [isShow, setIsShow] = useState(false);

  const [userData, setUserData] = useState<user[]>([]);

  const displayText = () => {
    setIsShow(current => !current);
  };

  async function userslist() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();
    console.log(user);
    setUserData(user)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const form_values = Object.fromEntries(formData);
    router.replace(`posts/${form_values.id}`);

  }

  return (
    <div className="grid place-items-center mt-10">
      <button onClick={displayText} className="bg-[white] text-black p-5">Do Server Action </button>
      {isShow && <div className="bg-[white] mt-5 text-black p-5">Do Server Console Log - console.log("This is server
        action printed on server console")</div>}

      <button onClick={userslist} className="bg-red-900 mt-8 text-white p-5">Get users data</button>
      <div className="mt-5">
        {userData && userData?.map((user: user, index) => {
          return <div className="usersdata p-1 mt-2 bg-slate-100 text-slate-950 text-sm" key={index}>{user.name}</div>
        })}
      </div>

      <form className="mt-3" onSubmit={onSubmit}>
        <input type="number" placeholder="Enter routing id" className="text-black" name="id" />
        <button type="submit"> Redirect dynamic route</button>
      </form>

    </div>
  );
}