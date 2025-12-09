const Header = () =>
{
  const menu = [
    {
      name: "Home",
      link: "#"
    },
    {
      name: "Projects",
      link: "#"
    },
    {
      name: "About",
      link: "#"
    },
    {
      name: "Experiences",
      link: "#"
    },
    {
      name: "Contact",
      link: "#"
    }
  ]
  return (
    <>
      <header className="bg-white dark:bg-gray-900 fixed w-full z-50">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto dark:hidden" />
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto not-dark:hidden" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400">
              <span className="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            { menu.map((item, index) => (
              <a key={ index } href={ item.link } className="text-sm/6 font-semibold text-gray-900 dark:text-white">{ item.name }</a>
            )) }
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">Resume <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>
      </header>
    </>
  )
};

export default Header;
