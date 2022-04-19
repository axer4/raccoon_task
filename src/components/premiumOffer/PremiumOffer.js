import s from './PremiumOffer.module.css';
import images from '../../images/featuresMugs';
import offerImages from '../../images/offer';
const {line} = images;
const {
    cupOfCoffee,
    cupOnHands,
    notepad
} = offerImages;
const PremiumOffer = () => {
    return (
          <div className={s.container}>
              <section className={s.offer}>
                <div className={s.offer_headingBlock}>
                    <img 
                    src={line}
                    alt='line'
                    />
                <h1 className={s.offer_heading}>Buy 2 mugs and get a coffee magazine free</h1>
                <img 
                src={line}
                alt='line'
                />
                </div>
                <div className={s.offer_content}>
                    <div className={s.content_images}>
                        <img
                        src={notepad}
                        alt='notepad'
                        className={s.notepad_image}
                         />
                    <ul className={s.images_list}>
                        <li className={s.images_item}>
                            <img
                            src={cupOnHands}
                            alt='cupOnHands' 
                        />
                        </li>
                        <li className={s.images_item}>
                            <img
                            src={cupOfCoffee}
                            alt='cupOfCoffee' 
                        />
                        </li>
                    </ul>
                    </div>
                    <div className={s.content_text}>
                        <h1 className={s.content_heading}>Premium offer</h1>
                        <p className={s.content_offer}>Get our Coffee Magazine</p>
                        <p className={s.content_description}>The most versatile furniture system ever created. Designed to fit your life.</p>
                        <button 
                        type='button'
                        className={s.content_button}
                        >Start Shopping</button>
                    </div>
                </div>
              </section>
          </div>
    )
}
export default PremiumOffer;