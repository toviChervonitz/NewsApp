import { Navigate, Route, Routes } from "react-router-dom";
import Daily from "./component/Daily";
import Home from "./component/Home";
import Politics from "./component/Politics";
import Sports from "./component/Sports";
import World from "./component/World";




export default function AppRoutes() {
    const generalItems = [
        {
            imgSrc: "https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver6/crop_images/2025/07/08/HymVpRKSgx/HymVpRKSgx_0_91_3000_1689_0_x-large.jpg",
            title: "trump and bibi",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque"
        },
        {
            imgSrc: "https://picsum.photos/300/200",
            title: "another news",
            text: "Dolor sit amet consectetur adipisicing elit. Nesciunt, ullam."
        },
        {
            imgSrc: "https://picsum.photos/300/201",
            title: "third article",
            text: "Consequatur, animi facere. Magnam, possimus."
        }
    ];

    return (
        <>
            <Routes>
                <Route path="/" element={<Home items={generalItems} />} />
                <Route path="/world" element={<World />} />
                <Route path="/politics" element={<Politics />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/sports" element={<Sports />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}