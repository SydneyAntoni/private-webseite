import {ReactNode} from "react";
import styles from  './node.module.css'

interface Props {
    children: ReactNode;
    date: string;
}

const Node = ({ children, date }: Props) => {
    return(
        <div className={styles.flexContainer}>
            <div>
                <h2 className={styles.date}>{date}</h2>
                <a>{children}</a>
            </div>
        </div>
    );
};

export default Node;
