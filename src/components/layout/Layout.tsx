import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = () => (
    <div>
        <Header name="Hello" />
        <main id="main">
            <Outlet />
        </main>
        <Footer />
    </div>
)

export default Layout
