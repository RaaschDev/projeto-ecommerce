import { CloseOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from '../../components/ui/Button';
import style from './product.module.scss';
import { ProductCard } from '../../components/ProductCard';

export function Product() {
    const isInCart = false;
    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.imgContainer}>
                    <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                </div>
                <div className={style.info}>
                    <h1>Nome do Produto</h1>
                    <p className={style.description}>Minha Descrição</p>
                    <span className={style.price}>500</span>
                    <div className={style.detail}>
                        <h2>Descrição</h2>
                        <p>Descrição detalhada do produto</p>
                        <ul>
                            <li>Garantia de 12 meses</li>
                            <li>Frete gratis para todo Brasil</li>
                            <li>Produto original com nota fiscal</li>
                        </ul>
                    </div>
                    <div className={style.actions}>
                        <Button variant={isInCart ? 'danger' : 'primary'}>
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
            </div>

            <div className={style.relatedProducts}>
                <h2>Produtos Relacionados</h2>
                <div className={style.carousel}>
                    <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg' />
                    <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg' />
                    <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg' />
                </div>
            </div>
        </div>
    )
}