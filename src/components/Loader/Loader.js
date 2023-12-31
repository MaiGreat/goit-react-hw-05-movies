import { Dna } from 'react-loader-spinner'
import css from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={css.loader}>
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Loader;