import "./Splash.css"
import Header from "@components/header/Header";
import Image from "@assets/splash_image.png"

function Slash(){
    return(
        <>
            <Header/>
            <main className="main-content">
                <div className="leftside-container">
                    <img src={Image} alt="Image"/>
                </div>
                <div className="application-name-container">
                    <h3>Keyvalue</h3>
                    <h1>Employee Application</h1>
                </div>
            </main>
        </>
    )

}

export default Slash;