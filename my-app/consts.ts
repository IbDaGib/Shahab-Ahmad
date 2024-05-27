// Type definition for RouteInfo
export type RouteInfo = {
    path: string;
    label: string;
    openInNewTab?: boolean;
  };
  
  // Define the routes for your site
  export enum Routes {
    home = 'home',
    overview = 'overview',
    gallery = 'gallery',
    poetry = 'poetry',
    about = 'about',
  }
  
  // Define the navigation bar links
  const navBarLinks = [
    Routes.overview,
    Routes.gallery,
    Routes.poetry,
    Routes.about,
  ];
  
  // Create the ROUTES object with path and label for each route
  const ROUTES: Record<Routes, RouteInfo> = {
    home: {
      path: '/',
      label: 'Home',
    },
    overview: {
      path: '/overview',
      label: 'Overview',
    },
    gallery: {
      path: '/gallery',
      label: 'Gallery',
    },
    poetry: {
      path: '/poetry',
      label: 'Poetry',
    },
    about: {
      path: '/about',
      label: 'About',
    },
  };
  
  // Map the navBarLinks to the ROUTES object
  const navBarRoutes = navBarLinks.map((route) => ROUTES[route]);
  
  export {
    navBarRoutes,
    ROUTES,
  };
  