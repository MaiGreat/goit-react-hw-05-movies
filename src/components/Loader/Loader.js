import { DNA } from 'react-loader-spinner'
import css from './Loder.module.css'

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