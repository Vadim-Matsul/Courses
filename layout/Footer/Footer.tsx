import { NextPage } from 'next';
import { FooterProps } from './Footer.props';
import stls from './Footer.module.css';
import classNames from 'classnames';
import { format } from 'date-fns';

export const Footer: NextPage<FooterProps> = ({ className, ...props }) => {

  const FooterClass = classNames(className, stls.footer)
  const date = format(new Date(), 'yyyy')

  return (
    <footer
      className={FooterClass}
      {...props}
    >
      <span>OwlTop © 2020 - {date} Все права защищены</span>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
      <a href='#' target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
}

