import { CheckCircleOutlined, HomeOutlined } from '@ant-design/icons';
import style from './success.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function Success() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <CheckCircleOutlined className={style.icon} />
                <h1>Pagamento confirmado</h1>
                <p>Obrigado pela sua compra</p>
                <div className={style.orderInfo}>
                    <h2>Resumo do pedido</h2>
                    <div className={style.items}>
                        <div className={style.item}>
                            <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/stillosb/catalog/produtos/camiseta-lisa/camiseta-stillos-brother-lisa-preto-frente.jpg" alt="product" />
                            <div className={style.itemInfo}>
                                <h3>Titulo</h3>
                                <span>R$ 500,00</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.total}>
                        <strong>Total</strong>
                        <strong>R$ 500,00</strong>

                    </div>

                </div>
                <Link to="/">

                    <Button>
                        <HomeOutlined />
                        Voltar para Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}