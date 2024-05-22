import {useState} from "react";
import classes from "./IconBlock.module.css";

interface IconBlockProps{
    src:string,
    name:string,
    description:string,
}
const IconBlock = ({src, name, description}: IconBlockProps) => {
    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    };

    return (
        <div onClick={handleClick} className={`${classes.card} ${isFlipped ? classes.flipped : ''} flex place-content-center bg-neutral-600 rounded-2xl bg-opacity-50` }>
            <div className={classes.front}>
                <div className={`${classes.icon} flex justify-center items-center bg-header`}>
                    <img className={'block'} src={src} alt={name}/>
                </div>
            </div>
            <div className={classes.back}>
                <div className={`${classes.icon} bg-header flex flex-col justify-center gap-1.5`}>
                    <div className={'w-2/5 h-2/5'}>
                        <img className={'h-full'} src={src} alt={'card-logo'}/>
                    </div>
                    <h6 className={'font-bold text-2xl'}>{name}</h6>
                    <h6 className={'font-bold text-sm'}>{description}</h6>
                </div>
            </div>
        </div>
    );
};

export default IconBlock;