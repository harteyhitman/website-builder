import { Categories } from "../../data/data"
import { contact } from "../../data/data"
const Footer = () => {
    return (
        <div className='footer_cont'>
                <div className="category">
                    {Categories.map((foot) => (
                        <div key={foot.id} className="foot">
                            <h2>{foot.category}</h2>
                            <ul>
                                <li>
                                    <a href={`#${foot.id}`}>{foot.list}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="contact_cont">
                    {contact.map((contacts) => (
                        <div key={contacts.id} className="contacts">
                            <h2>{contacts.contact}</h2>
                            <ul>
                                <li>
                                    <a href={`#${contacts.id}`}>{contacts.list}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
           

            <div className="us_list">
                <select name="us" id="us"><option value="name">United States</option></select>
            </div>
        </div>
    )
}

export default Footer