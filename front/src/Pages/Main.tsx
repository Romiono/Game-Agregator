import expressImg from "../Assets/images/png/express.png";
import reactImg from "../Assets/images/png/react.png";
import jwtImg from "../Assets/images/png/jwt.png";
import mongoImg from "../Assets/images/png/mongo.png";
import nodeImg from "../Assets/images/png/node.png";
import reduxImg from "../Assets/images/png/redux.png";
import threeImg from "../Assets/images/png/three.png";
import tsImg from "../Assets/images/png/ts.png";
import IconBlock from "../Componets/UI/IconBlock/IconBlock.tsx";

const icons = [
    {src: expressImg, name:"express", desc: "Высокоуровневый фрейморк для создания http сервера на NodeJS" },
    {src: reactImg, name:"react", desc: "JavaScript-библиотека для разработки UI интерфейсов"},
    {src: jwtImg, name:"jwt", desc: "Открытый стандарт для создания токенов доступа"},
    {src: mongoImg, name:"mongo", desc: "Документоориентированная система управления базами данных"},
    {src: nodeImg, name:"node", desc: "программная платформа, превращающая JS в язык общего назначения"},
    {src: reduxImg, name:"redux", desc: "Гибкий инструмент для state management’a в веб разработке"},
    {src: threeImg, name:"three", desc: " библиотека, для создания анимированной 3D графики"},
    {src: tsImg, name:"ts", desc: "Язык программирования, улучшающий разработку на JavaScript"},
];


const Main = () => {
    return (
        <div className={"flex flex-col h-full justify-center items-center gap-8"}>
            
            <h4 className={"text-4xl "}>Features</h4>

            <div className={"grid grid-cols-4 gap-4"}> 
                {icons.map((icon, index) => <IconBlock src={icon.src} name={icon.name} description={icon.desc} key={index} />)}
                
            </div>
        </div>
    );
};

export default Main;