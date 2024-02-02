import React from 'react';
import PropTypes from 'prop-types';

import { Header, LinkButton } from 'jcot-jstwblocklib';

import { Logo } from '../components/Logo'; 

import { footerlinks, navlinks, login, action } from '../data/navigation-links';

const MainLayout = ({children}) => {
  return (
  <div id="page" className="w-full min-h-screen min-h-full bg-white/20">
    <Header 
      logo={<Logo extClass="h-8 w-8 text-indigo-500" />}
      navlinks={navlinks}
      login={login}
      action={action}
    />
    <div id="content-area" className="flex flex-col flex-1">
      { children }
    </div>
    <footer id="bottom" className="mt-8 py-4 border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex flex-col md:flex-row gap-8">

        <div id="company-info" className="flex flex-col gap-4 w-full md:w-4/5">
          <Logo extClass="h-10 w-10 text-indigo-500" />
          <div className="pr-2 md:pr-24 text-gray-900/60 max-w-2xl">
            Product_Tag_Line
          </div>
          <div className="pr-2 md:pr-12 text-gray-900/50 text-sm">
            Copyright © 2023. All rights reserved by ProductName, owned and operated by Nubisera, LLC.
          </div>
        </div>

        <div id="links" className="flex flex-col gap-4 w-full md:w-1/5">
          <p className="text-xl font-semibold text-gray-900">
            Links
          </p>
          <ul className="flex flex-col space-y-2">
            { footerlinks.map(x => <li key={x.id}><LinkButton variant="secondary" href={x.href}>{x.text}</LinkButton></li>) } 
            { navlinks.map(x => <li key={x.id}><LinkButton variant="secondary" href={x.href}>{x.text}</LinkButton></li>) } 
          </ul>
        </div>

      </div>
    </footer>
  </div>
  );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
