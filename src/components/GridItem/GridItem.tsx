import {Level} from '../../helpers/imc'
import styles from './GridItem.module.css'
import upImage from '../../assents/up.png'
import downImage from '../../assents/down.png'

type props = {
    item: Level
};



export const GridItem = ({item}: props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30" />}
                {item.icon === 'down' && <img src={downImage} alt="" width="30" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>
            <div className={styles.gridInfo}>
                <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}