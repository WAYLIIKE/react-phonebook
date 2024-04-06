import css from './helpers.module.css';

export const buildNavLinkClass = ({ isActive }) => {
  return isActive ? css.active : css.link;
};
