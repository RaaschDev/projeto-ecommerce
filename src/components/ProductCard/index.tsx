import { Button } from '../ui/Button'
import style from './product-card.module.scss'
import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons'

interface ProductCardProps {
    id: string,
    title: string,
    description: string,
    price: number,
    imgUrl: string,
    isInCart?: boolean
}

export function ProductCard({ title, description, price, imgUrl, isInCart }: ProductCardProps) {
    return (
        <div className={style.productCard}>
            <img className={style.productImage} src={imgUrl} alt={title} />
            <div className={style.productInfo}>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={style.price}>{price}</span>
                </div>
                <Button variant={isInCart ? 'danger':'primary'}>
                    {isInCart ?
                        <>
                            <CloseOutlined />
                            Remover do carrinho
                        </> :
                        <>
                            <ShoppingCartOutlined />
                            Adicionar ao carrinho
                        </>
                    }
                </Button>
            </div>
        </div>
    )
}