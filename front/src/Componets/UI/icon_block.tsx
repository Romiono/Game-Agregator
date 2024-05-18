interface IconBlockProps{
    src:string,
    name:string
}
const IconBlock = ({src, name}: IconBlockProps) => {
    return (
        <div className="flex place-content-center bg-neutral-700 rounded-lg backdrop-opacity-5 p-8">
            <img className="" src={src} alt={name}/>
        </div>
    );
};

export default IconBlock;