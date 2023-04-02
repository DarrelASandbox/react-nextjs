import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => (
  <Link href={props.link} className={classes.btn}>
    {props.children}
  </Link>
);

export default Button;
