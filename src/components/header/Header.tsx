import { useRouter } from "next/navigation";
import "../header/Header.scss";

const Header = () => {
    const router = useRouter()

    const homeMove = () =>{
        router.push("/")
    }
    return ( <>
        <h1 id="Title">
            <div id="TitleName" onClick={homeMove}> 마라 PICK</div>
            <div className="Circle"></div>
        </h1>
    </> );
}

export default Header;