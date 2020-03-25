import loadable from '@loadable/component';
import {
  FaPaintBrush,
  FaImages,
  FaImage,
  FaCss3Alt,
  FaHtml5,
  FaLightbulb,
  FaJsSquare,
  FaBook,
} from 'react-icons/fa';

export const COLORS = {
  title: 'Colors',
  icon: FaPaintBrush,
  path: '/colors',
  component: loadable(() =>
    import(/* webpackChunkName: "colors" */ './Colors')
  ),
};

export const IMAGES = {
  title: 'Images',
  icon: FaImages,
  path: '/images',
  component: loadable(() =>
    import(/* webpackChunkName: "images" */ './Images')
  ),
};

export const BACKGROUNDS = {
  title: 'Backgrounds',
  icon: FaImage,
  path: '/backgrounds',
  component: loadable(() =>
    import(/* webpackChunkName: "backgrounds" */ './Backgrounds')
  ),
};
export const CSS = {
  title: 'CSS',
  icon: FaCss3Alt,
  path: '/css',
  component: loadable(() => import(/* webpackChunkName: "css" */ './CSS')),
};

export const HTML = {
  title: 'HTML',
  icon: FaHtml5,
  path: '/html',
  component: loadable(() => import(/* webpackChunkName: "html" */ './HTML')),
};
export const INSPIRATION = {
  title: 'Inspiration',
  icon: FaLightbulb,
  path: '/inspiration',
  component: loadable(() =>
    import(/* webpackChunkName: "inspiration" */ './Inspiration')
  ),
};
export const JAVASCRIPT = {
  title: 'Javascript',
  icon: FaJsSquare,
  path: '/javascript',
  component: loadable(() =>
    import(/* webpackChunkName: "javascript" */ './Javascript')
  ),
};

export const ARTICLES = {
  title: 'Articles',
  icon: FaBook,
  path: '/articles',
  component: loadable(() =>
    import(/* webpackChunkName: "articles" */ './Articles')
  ),
};
