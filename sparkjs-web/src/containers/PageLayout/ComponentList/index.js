// import Loadable from 'react-loadable';
import React, { lazy } from 'react';

import Loading from '../../../pageComponents/Loading';

/* Components */
const Header = lazy(() => import('../../../pageComponents/Header'));

const Home = lazy(() => import('../../../components/Home'));

const About = lazy(() => import('../../../pageComponents/About'));


export default {
  Home,
  Header,
  About,
}
