import {Button as BButton} from 'react-bootstrap'

const Button = (props) =>{
    const {text} = props;
    return(
        <BButton variant="primary" type="submit" style={{width:'100%'}}>{text}</BButton>     
    );
}

export default Button;