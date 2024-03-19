// Props 타입 정의
type HeaderProps = {
    name: string
}

// 컴포넌트 정의
const Header: React.FC<HeaderProps> = ({ name }) => {
    return (
        <header>
            <h1>{name}</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li>
                        <a href="/about">about</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
