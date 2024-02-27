import { CiCircleCheck } from "react-icons/ci";
import { TfiInfoAlt } from "react-icons/tfi";


const Webbuilder = () => {
  return (
    <div className='web_builder_cont'>
        <h1>Best Website builders in the US</h1>
        <div className="web_dropdown">
            <div className="right">
                <p><CiCircleCheck className="check" /> Last Updated-
                <span>February 22, 2020</span> </p>
                <p><TfiInfoAlt className="check"/>  Advertising Disclosure</p>
            </div>
            <div className="left-drop">
                <select name="top" id="relevant"><option value="top">Top Relevant</option></select>
            </div>
        </div>
    </div>
  )
}

export default Webbuilder