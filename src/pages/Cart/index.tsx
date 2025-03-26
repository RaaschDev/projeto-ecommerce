import { Link } from 'react-router-dom';
import style from './cart.module.scss';
import { Button } from '../../components/ui/Button';
import { CloseOutlined } from '@ant-design/icons';

export function Cart(){
    const emptyCart = false;
    return(
        <div className={style.container}>
            <h1>Carrinho de compras</h1>
            {emptyCart ? 
            <div className={style.emptyCart}>
                <p>Seu Carrinho esta vazio</p>
                <Link to="/">
                <Button>Continuar Comprando</Button>
                </Link>
            </div>
            :
            <div className={style.content}>

                <div className={style.cartItems}>
                    <div className={style.cartItem}>
                        <Link to="/products/1" className={style.productInfo}>
                        <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                        <div>
                            <h3>Titulo do produto</h3>
                            <p>Descrição do produto</p>
                            <span className={style.price}>100,00</span>
                        </div>
                        </Link>
                        <button className={style.removeButton}> 
                            <CloseOutlined/>
                        </button>
                    </div>
                    <div className={style.cartItem}>
                        <Link to="/products/1" className={style.productInfo}>
                        <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                        <div>
                            <h3>Titulo do produto</h3>
                            <p>Descrição do produto</p>
                            <span className={style.price}>100,00</span>
                        </div>
                        </Link>
                        <button className={style.removeButton}> 
                            <CloseOutlined/>
                        </button>
                    </div>
                    <div className={style.cartItem}>
                        <Link to="/products/1" className={style.productInfo}>
                        <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                        <div>
                            <h3>Titulo do produto</h3>
                            <p>Descrição do produto</p>
                            <span className={style.price}>100,00</span>
                        </div>
                        </Link>
                        <button className={style.removeButton}> 
                            <CloseOutlined/>
                        </button>
                    </div>
                    <div className={style.cartItem}>
                        <Link to="/products/1" className={style.productInfo}>
                        <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                        <div>
                            <h3>Titulo do produto</h3>
                            <p>Descrição do produto</p>
                            <span className={style.price}>100,00</span>
                        </div>
                        </Link>
                        <button className={style.removeButton}> 
                            <CloseOutlined/>
                        </button>
                    </div>
                </div>
                <div className={style.summary}>
                    <h2>Resumo do pedido</h2>
                    <div className={style.summaryContent}>
                        <div className={style.summaryItem}>
                            <span>Subtotal</span>
                            <span>100,00</span>
                        </div>

                        <div className={style.summaryItem}>
                            <span>Frete Gratis</span>
                            <span>100,00</span>
                        </div>

                        <div className={style.summaryTotal}>
                            <span>Total</span>
                            <span>500,00</span>
                        </div>
                        <Button>
                            Finalizar compra
                        </Button>
                        <Link to="/">
                            <Button fullwidth variant="secondary">Continuar comprando</Button>
                        </Link>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}