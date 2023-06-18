import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/solid";
import HeaderNav from "../header/page";
import Footer from "../footer/page";

export default function Dashboard() {
  return (
    <>
      <HeaderNav />
      <section className="page-content">
        <section className="search-and-user">
          <form>
            <input type="search" placeholder="Search Pages..." />
            <button type="submit" aria-label="submit form">
              <MagnifyingGlassIcon />
            </button>
          </form>
          <div className="admin-profile">
            <span className="greeting">Hello admin</span>
            <div className="notifications">
              <span className="badge">1</span>
              <UserIcon />
            </div>
          </div>
        </section>
        <section className="grid">
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </section>
        <Footer />
      </section>
    </>
  )

}
