import icon2 from "../assets/images/icon-success.svg";
import "../css/Success.css";
function Success() {
    return (
        <div className="full-card-success">

            <div className="content_success"><img src={icon2} alt="success" className="image2"></img><p className="h1">Thanks for Subscribing!</p>
            <div className="para">
                <p className="para1">A confirmation email has been sent to </p><p className="para1"><b>{localStorage.getItem("email")}</b>. Please open it and click</p><p className="para1"> the button inside to confirm your subscription.</p></div>
                <button className="button_success">Dismiss message  </button>
            </div>
            
        </div>
    )
}

export default Success;