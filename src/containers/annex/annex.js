import './annex.scss'
import { data } from '../../data/annex'

export default function Annex() {
    return (
        <section className='annex'>
            <h2>
                {data[0]?.title}
            </h2>
            <div className='annex--container'>
                <div className='annex--text'>
                    { data[0].content?.map( item => (
                        <p key={item}>
                            {item}
                        </p>
                    ))}
                </div>
                <div className='annex--picture'>
                    <img 
                        src={data[0]?.picture} 
                        alt={data[0]?.pictureDescription} 
                    />
                </div>
            </div>
        </section>
    )
}
