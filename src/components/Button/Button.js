import "./Button.css";
function Button({ children }) {
    return ( 
        <div className="btn-layout d-flex align-items-center">{children}</div>
     );
}

export default Button;