import Button from "../../components/button"
import { relatedDeals } from "../../data/data"
const RelatedDeals = () => {
  return (
    <div className='related_deals'>
        <h1>Related deals you might like for</h1>
        <div className="triplet">
            {relatedDeals.map((deals, index) =>(
                <div key={deals.id} className="deals">
                    <img src={deals.img} alt="" />
                    <div className="limited_time">
                        <p>{deals.percent}</p>
                        <p>{deals.time}</p>
                    </div>
                    <h3>Webbuilder 1</h3>
                    <p className="support">{deals.support}</p>
                    <div className="prices">
                        <div>${deals.price}</div>
                        <div>${deals.oldPrice}</div>
                        <div>({deals.off}% off)</div>
                    </div>
                    <Button className='view-btn' label={deals.btn}/>
                </div>
            ))}
        </div>
        <div className="sign_up">
            <h2>Sign up and get exclusive <br /> special deals</h2>
            <div className="sign_up_cont">
                <input type="search" name="serach" id="sign_up" />
                <Button className="sign_up_btn" label="Sign Up"/>
            </div>
        </div>
    </div>
  )
}

export default RelatedDeals