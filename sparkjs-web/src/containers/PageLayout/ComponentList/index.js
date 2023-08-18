// import Loadable from 'react-loadable';
import React, { lazy } from 'react';

import Loading from '../../../pageComponents/Loading';

/* Components */
const Header = lazy({
  loader: () => import ('../../../pageComponents/Header'),
  loading: Loading
});
const Home = lazy({
  loader: () => import ('../../../components/Home'),
  loading: Loading
});
const About = lazy({
  loader: () => import ('../../../pageComponents/About'),
  loading: Loading
});
const Setup = lazy({
  loader: () => import ('../../../pageComponents/Setup'),
  loading: Loading
});
const Words = lazy({
  loader: () => import ('../../../pageComponents/Words'),
  loading: Loading
});
const LeftRail = lazy({
  loader: () => import ('../../../pageComponents/LeftRail'),
  loading: Loading
});

export default {
  Home,
  About,
  Setup,
  Header,
  Words,
  LeftRail
}
