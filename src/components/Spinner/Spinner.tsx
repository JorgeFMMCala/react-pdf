import "./Spinner.css";
import { CircularProgress } from '@mui/material';

type SpinnerProps = {
    isBox?: boolean
}

export const Spinner = ({ isBox = true }: SpinnerProps) => {
    return (
        <div className={`d-flex justify-content-center align-items-center ${isBox ? 'box' : ''}`}>
            <CircularProgress />
            {/* <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> */}
        </div>
    )
}
