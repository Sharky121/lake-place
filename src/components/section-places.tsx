import {places} from '@/data/places'
import {Place} from "@/types/types";

const SectionPlaces = () => {
    return (
        <section className="page__section page-section page__places places" id="places">
            <div className="page-section__container container">
                <div className="page-section__head">
                    <h2 className="page-section__title">Участки</h2>
                    <p className="page-section__subtitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.</p>
                </div>

                <ul className="places__list">
                    {
                        places.map((place: Place, index) => (
                            <li key={index} className="places__item place-card"
                                style={{backgroundImage: `url(${place.backgroundImage})`}}>
                                <div className="place-card__wrapper" >
                                    <h3 className="place-card__title">{place.title}</h3>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default SectionPlaces;
