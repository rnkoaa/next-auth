import {
  AdjustmentsHorizontalIcon,
  AdjustmentsVerticalIcon,
  ArrowLeftOnRectangleIcon,
  BeakerIcon,
  BookOpenIcon, ChartBarSquareIcon, ChatBubbleLeftIcon, ClipboardDocumentListIcon, Cog8ToothIcon, GiftTopIcon, PresentationChartLineIcon, UsersIcon
} from '@heroicons/react/24/solid'

export default function HeaderNav() {
  return (
    <header className="page-header">
      <nav>
        <a href="#0" aria-label="forecastr logo" className="logo">
          <BeakerIcon width="140" height="49" />
        </a>
        <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
          {/* <svg width="20" height="20" aria-hidden="true"> */}
          {/*   <use xlink: href="#down"></use> */}
          {/* </svg> */}
        </button>
        <ul className="admin-menu">
          <li className="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <a href="#0">
              <BookOpenIcon />
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <UsersIcon />
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <ChartBarSquareIcon />
              <span>Trends</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <ClipboardDocumentListIcon />
              <span>Collection</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <ChatBubbleLeftIcon />
              <span>Comments</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <GiftTopIcon />
              <span>Appearance</span>
            </a>
          </li>
          <li className="menu-heading">
            <h3>Settings</h3>
          </li>
          <li>
            <a href="#0">
              <AdjustmentsVerticalIcon />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <Cog8ToothIcon />
              <span>Options</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <PresentationChartLineIcon />
              <span>Charts</span>
            </a>
          </li>
          <li>
            <div className="switch">
              <input type="checkbox" id="mode" checked />
              <label htmlFor="mode">
                <span></span>
                <span>Dark</span>
              </label>
            </div>
            <button className="collapse-btn" aria-expanded="true" aria-label="collapse menu">
              <ArrowLeftOnRectangleIcon />
              <span>Collapse</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
