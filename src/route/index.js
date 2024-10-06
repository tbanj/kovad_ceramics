import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../components/notfound/NotFound';
import Home from '../components/home/Home';
import About from '../components/aboutus/AboutUs';
import Contact from '../components/contact/Contact';
import Installation from '../components/service/installation/Installation';
import Maintenance from '../components/service/maintenance/Maintenance';
import Repair from '../components/service/repair/Repair';
import Products from '../components/service/products/Products';

import Glazed_porcelain_tile from '../components/service/glazed_porcelain_tile/Glazed_porcelain_tile';
import Rustic_porcelain_tile from '../components/service/rustic_porcelain_tile/Rustic_porcelain_tile';
import HumanResource from '../components/service/hr/HumanResource';

import CallCenter from '../components/service/callcenter/CallCenter';
import OtherServices from '../components/service/otherservices/OtherServices';
import Services from '../components/service/service/Services';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route
        path="/products-glazed_porcelain_tile"
        component={Glazed_porcelain_tile}
      />
      <Route
        path="/products-rustic_porcelain_tile"
        component={Rustic_porcelain_tile}
      />
      <Route path="/services" component={Services} />
      <Route path="/services-installation" component={Installation} />
      <Route path="/services-maintenance" component={Maintenance} />
      <Route path="/services-repair" component={Repair} />
      <Route path="/human-resource-outsourcing" component={HumanResource} />
      <Route path="/callcenter-solution" component={CallCenter} />
      <Route path="/other-business-services" component={OtherServices} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routing;
