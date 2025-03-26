import { ProductCard } from '../../components/ProductCard';
import style from './home.module.scss';

export function Home() {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <h1>E-commerce Developer</h1>

            </div>
            <div className={style.products}>
                <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg'/>
                <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg'/>
                <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg'/>
                <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg'/>
                <ProductCard id='1' title='Camiseta' description='Camiseta Preta' price={500.00} imgUrl='https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg'/>
            </div>
        </div>
    )
}