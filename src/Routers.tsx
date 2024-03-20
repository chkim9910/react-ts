import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout, { LayoutNone } from './components/layout/Layout'
import Home from './views/Home'
// import Signin from './views/Signin'
import About from './views/About'
import Signin from './views/Signin'

const Routers: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<LayoutNone />}>
                <Route path="signin" element={<Signin />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Routers
