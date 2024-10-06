import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../components/notfound/NotFound';
import Home from '../components/home/Home';
const About = lazy(() => import('../components/aboutus/AboutUs'));
const Contact = lazy(() => import('../components/contact/Contact'));
const Service = lazy(() => import('../components/service/service/Services'));
const Installation = lazy(() =>
  import('../components/service/installation/Installation')
);
const Maintenance = lazy(() =>
  import('../components/service/maintenance/Maintenance')
);
const Repair = lazy(() => import('../components/service/repair/Repair'));
const Products = lazy(() => import('../components/service/products/Products'));
const Glazed_porcelain_tile = lazy(() =>
  import('../components/service/glazed_porcelain_tile/Glazed_porcelain_tile')
);
const Rustic_porcelain_tile = lazy(() =>
  import('../components/service/rustic_porcelain_tile/Rustic_porcelain_tile')
);
const HumanResource = lazy(() =>
  import('../components/service/hr/HumanResource')
);
const CallCenter = lazy(() =>
  import('../components/service/callcenter/CallCenter')
);
const OtherServices = lazy(() =>
  import('../components/service/otherservices/OtherServices')
);
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
      <Route path="/services" component={Service} />
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
