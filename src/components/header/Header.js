import './Header.css';
import { FaMapMarkerAlt, FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";

function Header(){
    return (
        <div className='Header'>
            <div>
                <img src="./images/amazon.png" alt="" />
            </div>
            <div>
                <FaMapMarkerAlt></FaMapMarkerAlt>
                <div>
                <p>Deliver to Nashik</p>
                <p>Nashik 422004</p>
                </div>
            </div>
            <div>
                <button type="">ALL
                    <FaCaretDown />
                </button>
                <div>
                    <input type="" name="" value="" />
                </div>
                <FaSearch/>
            </div>
            <div>
                <img src="./images/india.svg" alt="" />
                <FaCaretDown />
            </div>
            <div>
                <p>Hello Pratik</p>
                <p>Account & Lists</p>
                <FaCaretDown />
            </div>
            <div>
                <p>Returns</p>
                <p>& Orders</p>
            </div>
            <div>
                <FaShoppingCart></FaShoppingCart>
                <p>Cart</p>
            </div>
        </div>
    );   
}

export default Header;