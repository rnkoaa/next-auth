
// https://codepen.io/tutsplus/details/gOObdjQ
import Footer from "./components/footer/page";
import HeaderNav from "./components/header/page";
import Images from "./components/images/images";
import SideBarNav from "./components/side-nav/page";

import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import ClientProtectedPage from "./protected/client/page";
import Link from "next/link";
import Dashboard from "./components/Dashboard/dashboard";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import SignInButton from "./signin/page";

//   {/* <div> */ }
//   {/*   Welcome to our super cool page */ }
// {/*   <div> */ }
// {/*     <Link href="/protected/server">Protected (server)</Link> */ }
// {/*   </div> */ }
// {/*   <div> */ }
// {/*     <Link href="/protected/client">Protected (client)</Link> */ }
// {/*   </div> */ }
// {/* </div> */ }

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <SignInButton />
  }
  console.log(session)
  return (
    <Dashboard />
  )
}


// const html = document.documentElement;
// const body = document.body;
// const menuLinks = document.querySelectorAll(".admin-menu a");
// const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
// const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
// const switchInput = document.querySelector(".switch input");
// const switchLabel = document.querySelector(".switch label");
// const switchLabelText = switchLabel.querySelector("span:last-child");
// const collapsedClass = "collapsed";
// const lightModeClass = "light-mode";

// // TOGGLE HEADER STATE
// collapseBtn.addEventListener("click", function () {
//   body.classList.toggle(collapsedClass);
//   this.getAttribute("aria-expanded") == "true"
//     ? this.setAttribute("aria-expanded", "false")
//     : this.setAttribute("aria-expanded", "true");
//   this.getAttribute("aria-label") == "collapse menu"
//     ? this.setAttribute("aria-label", "expand menu")
//     : this.setAttribute("aria-label", "collapse menu");
// });

// // TOGGLE MOBILE MENU
// toggleMobileMenu.addEventListener("click", function () {
//   body.classList.toggle("mob-menu-opened");
//   this.getAttribute("aria-expanded") == "true"
//     ? this.setAttribute("aria-expanded", "false")
//     : this.setAttribute("aria-expanded", "true");
//   this.getAttribute("aria-label") == "open menu"
//     ? this.setAttribute("aria-label", "close menu")
//     : this.setAttribute("aria-label", "open menu");
// });

// // SHOW TOOLTIP ON MENU LINK HOVER
// for (const link of menuLinks) {
//   link.addEventListener("mouseenter", function () {
//     if (
//       body.classList.contains(collapsedClass) &&
//       window.matchMedia("(min-width: 768px)").matches
//     ) {
//       const tooltip = this.querySelector("span").textContent;
//       this.setAttribute("title", tooltip);
//     } else {
//       this.removeAttribute("title");
//     }
//   });
// }

// // TOGGLE LIGHT/DARK MODE
// if (localStorage.getItem("dark-mode") === "false") {
//   html.classList.add(lightModeClass);
//   switchInput.checked = false;
//   switchLabelText.textContent = "Light";
// }

// switchInput.addEventListener("input", function () {
//   html.classList.toggle(lightModeClass);
//   if (html.classList.contains(lightModeClass)) {
//     switchLabelText.textContent = "Light";
//     localStorage.setItem("dark-mode", "false");
//   } else {
//     switchLabelText.textContent = "Dark";
//     localStorage.setItem("dark-mode", "true");
//   }
// });
// */
