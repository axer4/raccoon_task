import s from './FeaturesMugs.module.css';
import images from '../../images/index';
const {line} = images;
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
            </section>
        </div>
    )
}
export default FeaturesMugs;