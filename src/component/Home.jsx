import '../App.css'
import Navbar from './Navbar'
import Content from './Content'
import Sidevar from './Sidebar'
import AppRoutes from '../AppRoutes'

function Home() {

  return (
    <>

      <div className="content">
        <div className="items">
          <Content
            imgSrc="https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver6/crop_images/2025/07/08/HymVpRKSgx/HymVpRKSgx_0_91_3000_1689_0_x-large.jpg"
            title="tramp and bibi"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque"
          />
          <Content
            imgSrc="https://picsum.photos/300/200"
            title="another news"
            text="Dolor sit amet consectetur adipisicing elit. Nesciunt, ullam."
          />
          <Content
            imgSrc="https://picsum.photos/300/201"
            title="third article"
            text="Consequatur, animi facere. Magnam, possimus."
          />
        </div>
      </div>
    </>
  )
}

export default Home;
