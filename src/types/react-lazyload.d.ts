declare module 'react-lazyload' {
  import { ComponentType, ReactNode } from 'react';

  interface LazyLoadProps {
    height?: number | string;
    offset?: number;
    once?: boolean;
    placeholder?: JSX.Element;
    debounce?: number;
    scroll?: boolean;
    children?: ReactNode;
  }

  const LazyLoad: ComponentType<LazyLoadProps>;

  export default LazyLoad;
}
