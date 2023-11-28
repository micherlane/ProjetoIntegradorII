import Modal from 'react-modal';
import styles from './styles.module.css';
import { useContext, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { FiX } from 'react-icons/fi';
import { PostModel } from '@/models/postModel';
import { DisponibilityComponent } from '../DisponibilityComponent';

interface ModalReservationAddProps {
    isOpen: boolean;
    onRequestClose: () => void;
    post: PostModel;
}

export function ModalReservationAdd({ isOpen, onRequestClose, post }: ModalReservationAddProps) {
    const { user } = useContext(AuthContext);

    const [disponibilityStatus, setDisponibilityStatus] = useState(Array(post.disponiblity.length).fill(false));

    const selectDisponibility = (index: number) => {
        let disponibilitysStatusUpdated = [...disponibilityStatus];

        disponibilitysStatusUpdated = disponibilityStatus.map((disponibility, i) => {
            if (index === i) {
                disponibility = !disponibility;
                return disponibility;
            }

            disponibility = false;

            return disponibility;
        });

        setDisponibilityStatus(disponibilitysStatusUpdated);

        console.log(disponibilitysStatusUpdated)

    }

    const customStyle = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            top: '50%',
            bottom: 'auto',
            margin: '1rem',
            left: '50%',
            right: 'auto',
            padding: '10px',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff'
        }
    }

    const handleAdd = () => { }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyle}
        >
            <div className={styles.modalStyle}>
                <div className={styles.buttonContainer}>
                        <button
                            type='button'
                            onClick={onRequestClose}
                            className='react-modal-close'
                            style={{ background: 'transparent', border: 0 }}
                        >
                            <FiX size={30} color="#ff0000" />
                        </button>
                    </div>
                <div className={styles.formStyleContainer}>
                    <form>
                        <div className={styles.titleReservationContainer}>
                            <h2 className={styles.titleReservation}>Reservar Passeio</h2>
                        </div>

                        <div className={styles.postContainer}>
                            <div className={styles.informationPost}>
                                <h3>Publicação</h3>
                                <p>{post.title}</p>
                            </div>

                            <div className={styles.informationPost}>
                                <h3>Autor</h3>
                                <p>{post.author.name}</p>
                            </div>

                            <div className={styles.informationPost}>
                                <h3>Endereço</h3>
                                <p>{post.address}</p>
                            </div>
                        </div>
                        <div className={styles.disponibilityContainer}>
                            <h3>Escolha uma data para o passeio:</h3>
                            <div className={styles.disponibility}>
                                {
                                    post.disponiblity.map((disponibility, index) => (
                                        <DisponibilityComponent
                                            key={index}
                                            value={disponibility}
                                            isSelected={disponibilityStatus[index]}
                                            onClicked={() => {
                                                selectDisponibility(index)
                                            }}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <button className={styles.doReservationButtonStyle}>Reservar Passeio</button>

                    </form>

                </div>
            </div>

        </Modal>
    )
}