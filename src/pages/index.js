import Layout from '@/containers/Layout/index'
// redux
import { useSelector } from 'react-redux'
// components
import NavbarDesktop from '@/components/home/NavbarDesktop';
import NavbarPhone from '@/components/home/NavbarPhone';
import Biography from '@/components/home/Biography';
import Hero from '@/components/home/Hero';
import Overlay from '@/components/home/Overlay';





const HomePage = () => {

  const pageData = useSelector(state => state.pageData)
  const { sidebarExpand, overlay } = pageData

  return (
    <div>
      <Layout>
        <div className="
            flex 
            flex-nowrap 
            relative"
          style={{ direction: 'ltr' }}
        >
          <Overlay />
          {/* only show + md size */}
          <NavbarDesktop pageName="خانه" />
          {/* visible on - md size */}
          <NavbarPhone pageName="خانه" />

          <Biography />

          {/* main content */}
          <div className={`hero relative text-white 
            ${overlay ? 'overflow-hidden' : 'overflow-y-auto'} 
            ${sidebarExpand ? 'drawer' : ''}`}
          >
            {/* hero top background image  */}
            <div className="hero__image">
              <div className="hero__image-overlay" />
            </div>
            {/* hero content */}
            <Hero />
          </div>
        </div>

      </Layout>
    </div >
  )
}

export default HomePage
