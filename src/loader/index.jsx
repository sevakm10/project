import useLoader from '../hook/useLoader';
import './style.scss';


function Loader() {
    const { loading } = useLoader()
    return loading && (
        <div class="cssload-thecube">
            <div class="cssload-cube cssload-c1"></div>
            <div class="cssload-cube cssload-c2"></div>
            <div class="cssload-cube cssload-c4"></div>
            <div class="cssload-cube cssload-c3"></div>
        </div>
    )
}
export default Loader;