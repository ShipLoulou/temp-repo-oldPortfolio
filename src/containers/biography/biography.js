import './biography.scss'
import { data } from '../../data/biography'
import  Button, { BUTTON_TYPES }  from '../../components/button/button'

export default function Biography() {
    return (
        <section className='profil'>
            <div className='profil--container'>
                <img 
                    src={data[0]?.picture} 
                    alt="Mael Boileve" 
                />
                <div className="profil--article">
                    <article>
                        <div>
                            <h2>
                                {data[0]?.title}
                            </h2>
                        </div>
                        { data[0].content?.map( item => (
                            <p key={item}>
                                {item}
                            </p>
                        ))}
                        <Button type={BUTTON_TYPES.BIOGRAPHY}>
                            VOIR MON CURRICULUM VITAE
                        </Button>
                    </article>
                </div>
            </div>
        </section>
    )
}
