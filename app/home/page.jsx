import HeaderComponent from "@/components/Header";
import BodyComponent from "@/components/Body";
import FooterComponent from "@/components/Footer";

export default function HomeTrial(){
    return(
        <div className="">
            <div className=" w-full">
                <HeaderComponent/>
            </div>
            <div>
                <BodyComponent/>
            </div>
            <div>
                <FooterComponent/>
            </div>
        </div>
    );
}