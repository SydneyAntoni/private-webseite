import Image from "next/image";
import styles from "./card.module.css"

interface Props {
    title: string;
    subTitle: string;
    srcPicture: string;
    altPicture: string;
    width: number;
    height: number;
}

const Card = ({title, subTitle, srcPicture, altPicture, width, height}: Props) => {
    return (
        <div className={styles.cardContainer}>
            <Image className={styles.imageContainer} src={srcPicture} alt={altPicture} width={width} height={height}/>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
        </div>
    );
};

export default Card;
