import s from './FeaturesMugs.module.css';
import images from '../../images/featuresMugs';
const {line,goldenMug,pinkCeramic} = images;
const FeaturesMugs = () => {
    return (
        <div className={s.container}>
            <section className={s.mugs}>
                <div className={s.mugs_headingBlock}>
                    <img 
                    src={line}
                    alt='line'
                    />
                <h1 className={s.mugs_heading}>FEATURED MUGS</h1>
                <img 
                src={line}
                alt='line'
                />
                </div>
                <div className={s.mugs_features}>
                    <ul className={s.mugs_list}>
                        <li className={s.mugs_item}>
                            <img 
                            className={s.mugs_image}
                            src={pinkCeramic}
                            alt='pink ceramic'
                            />
                            <h2 className={s.mugs_item_heading}>Pink Premium Ceramic</h2>
                            <p className={s.mugs_item_price}>$ 99.00 USD</p>
                        </li>
                        <li className={s.mugs_item}>
                            <img 
                            className={s.mugs_image}
                            src={goldenMug}
                            alt='pink ceramic'
                            />
                            <h2 className={s.mugs_item_heading}>Golden Designers Mug</h2>
                            <div className={s.inline_block}>
                            <p className={s.mugs_item_redPrice}>$50.00</p>
                            <p className={s.mugs_item_oldPrice}>$ 69.00 USD</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default FeaturesMugs;