import { InfinitySpin} from 'react-loader-spinner';
import './smallLoader.css';
export const SmallLoader = () => {
    return (
        <div className='small-loader'>
            <InfinitySpin 
                width='200'
                color="black"
                className="loading"
            />
        </div>
    );
};