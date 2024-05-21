import './title.css';

function Title({children, name}){
    return(
        <div className='tile'>
            {children}
            <span>{name}</span>
        </div>
    )
}

export default Title;