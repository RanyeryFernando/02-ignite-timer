import  styles from './Button.styles.ts';

interface ButtonProps {
    color?: 'primary' | 'secondary' | 'danger' | 'success';
 }

export function Button({ color = 'primary' }: ButtonProps) {
    return <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
}