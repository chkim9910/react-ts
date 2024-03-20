// import { css } from '@emotion/react'

// Props 타입 정의
type HeaderProps = {
    name: string
}

// 컴포넌트 정의
const Header: React.FC<HeaderProps> = ({ name }) => {
    return (
        <header>
            <h1 className="text-3xl font-light">{name}</h1>
            {/* <h1 tw>{name}</h1> */}
            <p className="text-lg font-medium">Hello, Typescript!</p>
            <nav>
                <ul>
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li>
                        <a href="/about">about</a>
                    </li>
                    <li>
                        <a href="/signin">signin</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
