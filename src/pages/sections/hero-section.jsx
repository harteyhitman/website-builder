import Button from "../../components/button"
import { board } from "../../data/data"
import { IoIosArrowDown } from "react-icons/io";


const HeroSection = () => {
    return (
        <div className='hero-section'>
            {board.map((boards, index) => (
                <div key={boards.id} className="hero">
                    <div className="hero1">
                        <h4>{boards.id}</h4>
                        <div>
                            <img src={boards.image} alt="image" />
                            <p>{boards.imgText}</p>
                        </div>

                    </div>
                    
                    <div className="hero2">
                        <p><span>{boards.header}</span>{boards.text1} </p>
                        <h3>{boards.highlight}</h3>
                        <p>{boards.text2}</p>

                        {index ===3 &&(
                             <div className="pink">
                            <p><span>{boards.rate1}</span>{boards.buildText}</p>
                            <p><span>{boards.rate2}</span>{boards.buildText}</p>
                            <p><span>{boards.rate2}</span>{boards.buildText}</p>
                        </div>
                        )}
                       
                        <h3>{boards.love}</h3>
                        {index ===3 &&(
                              <div className="check_mark">
                            <div> <img src={boards.mark} alt="" />  <p>{boards.document}</p></div>
                            <div> <img src={boards.mark} alt="" />  <p>{boards.ease}</p></div>
                            <div> <img src={boards.mark} alt="" /> <p>{boards.outOfBox}</p></div>
                        </div>
                        )}
                      

                        <details>
                            <summary>{boards.showMore} <IoIosArrowDown className="down_arrow" /> </summary>
                            <p>{boards.text1}</p>
                        </details>

                    </div>
                    <div className="hero3">
                        <div className="rating">
                            <h3>{boards.rating}</h3>
                            <p>{boards.commends}</p>
                            <img src={boards.starRating} alt="" />
                        </div>
                        <Button label={boards.view} className='view-btn' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HeroSection