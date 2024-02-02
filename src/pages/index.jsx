import React, { useEffect } from 'react';

import { Helmet } from "react-helmet";

import { AnimatedHeadline } from 'jcot-jstwblocklib';

import MainLayout from '../layouts/MainLayout';

import siteMetadata from '../data/siteMetadata';
import { useAnalyticsEventTracker } from '../hooks/useAnalyticsEventTracker';

function Index() {
  // hooks
  const gaEventTracker = useAnalyticsEventTracker('landing_page');

  useEffect(() => {
    gaEventTracker('landing_page');
  }, [gaEventTracker])

  // render
  return (
  <>
    <section id="heroe" className="relative overflow-hidden w-full max-w-full h-full md:h-[40rem] lg:h-[60rem] bg-white">
      <Helmet>
        <link rel="canonical" href={siteMetadata.site.baseUrl} />
      </Helmet>

      <div id="hero-text" className="mx-auto max-w-7xl px-4 md:px-8 relative z-20">
        <div className="flex flex-col md:items-center justify-center text-left md:text-center mx-auto w-full max-w-3xl space-y-4 py-12 md:py-24">

		  <AnimatedHeadline>
		    Product Description
          </AnimatedHeadline>

          <div className="text-lg font-semibold text-gray-800">
            #1 Tool for Stunning Product
          </div>

        </div>
      </div>
    </section>

  </>
  )
}

Index.Layout = MainLayout;

export default Index;
