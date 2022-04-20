import s from './moreProducts.module.css';
import images from '../../images/featuresMugs';
import productsImages from '../../images/moreProducts';
const {line} = images;
const {
    summerCup,
    winterStyleMug,
    blackTeaCup,
    ceramicTea,
    espressoCup,
    essentialsMug,
    noHandleCup,
    pinkPremium,
    redLoveCup
} = productsImages;
const MoreProducts = () => {
    return (
         <div className={s.container}>
             <section className={s.moreProducts}>
                 <div className={s.moreProducts_headingBlock}>
                    <img 
                    src={line}
                    alt='line'
                    />
                <h1 className={s.moreProcuts_heading}>MORE PRODUCTS</h1>
                <img 
                src={line}
                alt='line'
                />
                </div>
                <div className={s.prdoucts_list}>
                    <div className={s.products_item}>
                        <img
                        src={redLoveCup}
                        alt='redLoveCup'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Red Love Cup</h2>
                        <div className={s.inline_block}>
                            <p className={s.mugs_item_redPrice}>$25.00</p>
                            <p className={s.mugs_item_oldPrice}>$ 37.00 USD</p>
                            </div>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={blackTeaCup}
                        alt='blackTeaCup'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Black Tea Cup</h2>
                        <div className={s.inline_block}>
                            <p className={s.mugs_item_redPrice}>$15.00</p>
                            <p className={s.mugs_item_oldPrice}>$ 29.00 USD</p>
                            </div>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={essentialsMug}
                        alt='essentialMug'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>B{`&`}W Essentials Mug</h2>
                        <p className={s.mugs_item_price}>$ 19.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={winterStyleMug}
                        alt='winterStyleMug'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Winter Style Mug</h2>
                        <p className={s.mugs_item_price}>$ 25.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={ceramicTea}
                        alt='ceramicTea'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Ceramic Tea</h2>
                        <p className={s.mugs_item_price}>$ 46.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={noHandleCup}
                        alt='noHandleCup'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>No Handle Bar Cup</h2>
                        <p className={s.mugs_item_price}>$ 34.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={espressoCup}
                        alt='espressoCup'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Espresso Cup by Mugs.co</h2>
                        <p className={s.mugs_item_price}>$ 25.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={pinkPremium}
                        alt='pinkPremium'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Pink Premium Ceramic</h2>
                        <p className={s.mugs_item_price}>$ 99.00 USD</p>
                    </div>
                    <div className={s.products_item}>
                        <img
                        src={summerCup}
                        alt='pinkPremium'
                        className={s.products_image}
                        />
                        <h2 className={s.products_heading}>Summer Designer Cup</h2>
                        <p className={s.mugs_item_price}>$ 29.00 USD</p>
                    </div>
                    
                </div>
             </section>
         </div>
        
    )
}
export default MoreProducts;