import Image from "next/image";
import myImage from '/assets/herosec1.jpg'

const Header = () => {
    return (
        <div>
            <div className="mt-10">
                <Image className="rounded-full mx-auto" src={myImage} height={180} width={180} alt="Nahid" />
            </div>
        </div>
    );
};

export default Header;