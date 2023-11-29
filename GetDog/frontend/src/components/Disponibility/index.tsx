import styles from './styles.module.css';
import { formatDate } from '@/utils/dataUtils';

interface DisponibilityProps {
    value: Date;
    isSelected?: boolean;
    onClicked: () => void;
}

export function DisponibilityComponent({ value, isSelected = false, onClicked }: DisponibilityProps) {
    const disponibilityClassStyle = isSelected ? `${styles.disponibilityStyles} ${styles.selected}` : styles.disponibilityStyles;

    return (
        <div className={disponibilityClassStyle} onClick={onClicked} >
            <p>{formatDate(value)}</p>
        </div>

    );
}