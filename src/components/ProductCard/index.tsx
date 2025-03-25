import { Button } from '../ui/Button'
import style from './product-card.module.scss'
import { ShoppingCartOutlined } from '@ant-design/icons'

interface ProductCardProps{
    id:string,
    title:string,
    description:string,
    price:number,
    imgUrl:string
}

export function ProductCard({title, description, price,imgUrl}:ProductCardProps) {
    return (
        <div className={style.productCard}>
            <img className={style.productImage} src={imgUrl} alt={title} />
            <div className={style.productInfo}>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={style.price}>{price}</span>
                </div>
                <Button variant="danger">
                    <ShoppingCartOutlined/>
                    Adicionar ao Carrinho
                </Button>
            </div>
        </div>
    )
}