import { IoSearchOutline } from "react-icons/io5"
import { navsMenu } from "../../data/data"



const SearchNav = () => {
  return (
    <div className='search_nav_cont'>

      <div className="input_search">
        <IoSearchOutline className="search" />
        <input type="search" />
      </div>

      <div className="search_menu">

        {navsMenu.map((menu) => (
          <div key={menu.id} className="menu">
            <ul>
              <li>
                <a href={`#${menu.id}`}>{menu.text}</a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchNav