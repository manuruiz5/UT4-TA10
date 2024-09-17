import classes from './index.module.css';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
    return (
        <div className={classes.container}>
            {children} {}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default Card;
