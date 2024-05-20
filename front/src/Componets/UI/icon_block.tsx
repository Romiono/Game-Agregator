interface IconBlockProps{
    src:string,
    name:string
}
const IconBlock = ({src, name}: IconBlockProps) => {
    return (
        <div className="flex place-content-center bg-neutral-600 rounded-2xl bg-opacity-50 p-8">
            <img className="shadow-black" src={src} alt={name}/>
        </div>
    );
};

export default IconBlock;