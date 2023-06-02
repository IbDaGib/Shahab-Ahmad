import Link from 'next/link';
import { ActiveLink } from './ActiveLink';

function MenuItem({ href, children }) {
  return (
    React.createElement(ActiveLink, {
      className: "p-4 decoration-accent decoration-4 underline-offset-4 hover:underline hover:decoration-accent/25",
      activeClassName: "underline hover:decoration-accent",
      href: href
    }, children)
  );
}

export function NavigationMenu({  }) {
  return (
    React.createElement(React.Fragment, null, 
      React.createElement("div", { className: "h-32 xl:hidden" }),
      React.createElement("div", { className: "fixed flex z-10 items-center left-0 px-2 xl:px-8 top-10 uppercase font-bold backdrop-brightness-150 text-black bg-white/50" },
        React.createElement(MenuItem, { href: "/" }, "Home"),
        React.createElement(MenuItem, { href: "/about" }, "About"),
        React.createElement(MenuItem, { href: "/contact" }, "Contact"),
      )
    )
  );
}
