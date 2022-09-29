import  styles from './Button.module.css';

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
 }

export function Button(props: ButtonProps) {
    return <button className={'${styles.button} ${styles}'}>Enviar</button>
}