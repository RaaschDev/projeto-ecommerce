import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import style from './header.module.scss'

export function Header(){
    return(
        <header className={style.container}>
            <Link to='/'>
            <strong>Ecommerce Developer</strong></Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cart' className={style.cartLink}>
                    <span>Carrinho</span>
                    <div className={style.cartIconContainer}>
                        <ShoppingCartOutlined/>
                        <span className={style.cartBadge}> 1 </span>
                    </div>
                </Link>
            </nav>
        </header>
    )
}