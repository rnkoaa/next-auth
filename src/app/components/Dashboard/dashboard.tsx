'use client'

import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import HeaderNav from "../header/page";
import Footer from "../footer/page";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { LogoutButton } from "../LoginButton/page";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin")
    }
  })
  return (
    <>
      <div>
        <h1>Welcome to My Awesome Dashboard</h1>
        <h5>{session?.user?.name}</h5>
        <h5>{session?.user?.email}</h5>
        <h5>{session?.user?.image}</h5>
        <LogoutButton />
      </div>

    </>
  )


  // {/* <HeaderNav /> */}
  // {/* <section className="page-content"> */}
  // {/*   <section className="search-and-user"> */}
  // {/*
  //     <form>
  //       <input type="search" placeholder="Search Pages..." />
  //       <button type="submit" aria-label="submit form">
  //         <MagnifyingGlassIcon />
  //       </button>
  //     </form>
  //     */}
  // {/* <div className="admin-profile"> */}
  // {/*   <span className="greeting">Hello {session?.user?.name}</span> */}
  // {/* <div className="notifications"> */}
  // {/*   <span className="badge">1</span> */}
  // {/*   <UserIcon /> */}
  // {/* </div> */}
  // {/* <Footer /> */}
  // {/*   </div> */}
  // {/* </section> */}
  // {/* <section className="grid"> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/*   <article></article> */}
  // {/* </section> */}
  // {/* <Footer /> */}
  // {/* </section> */}

}
