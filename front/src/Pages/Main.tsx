import IconBlock from "../Componets/UI/icon_block";
import expressImg from "../Assets/images/png/express.png";
import reactImg from "../Assets/images/png/react.png";
import jwtImg from "../Assets/images/png/jwt.png";
import mongoImg from "../Assets/images/png/mongo.png";
import nodeImg from "../Assets/images/png/node.png";
import reduxImg from "../Assets/images/png/redux.png";
import threeImg from "../Assets/images/png/three.png";
import tsImg from "../Assets/images/png/ts.png";

const icons = [
    {src: expressImg, name:"express"},
    {src: reactImg, name:"react"},
    {src: jwtImg, name:"jwt"},
    {src: mongoImg, name:"mongo"},
    {src: nodeImg, name:"node"},
    {src: reduxImg, name:"redux"},
    {src: threeImg, name:"three"},
    {src: tsImg, name:"ts"},
];


const Main = () => {
    return (
        <div className={"flex flex-col h-full justify-center items-center gap-8"}>
            
            <h4 className={"text-4xl "}>Features</h4>

            <div className={"grid grid-cols-4 gap-4"}> 
                {icons.map((icon, index) => <IconBlock src={icon.src} name={icon.name} key = {index} />)}
                
            </div>
        </div>
    );
};

export default Main;