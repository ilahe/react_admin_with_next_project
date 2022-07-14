import Link from "next/link";
//SVG
import {Credit, EmptyHeart, FullHeart} from "../../../svg";

const Card = ({image, favoriteIcon, creditIcon, cardPrice, cardName, cardDate, ...props}) => {

    return (
        <div {...props}>
            <Link href="">
                <a className="card-box">
                    <div className="img-block">
                        {/*<Image src="../public/card-img.jpg" alt="picture" objectFit="cover"/>*/}
                        <img src={image} alt="picture"/>
                        <span className="credit">
                           {!creditIcon ? <Credit/> : null}
                       </span>
                    </div>
                    <span className="card-price">{cardPrice} AZN</span>
                    <span className="card-hr">&nbsp;</span>
                    <p className="cart-name">{cardName}</p>
                    <span className="card-date">{cardDate}</span>
                    <span className="favorite">
                        {favoriteIcon ? <FullHeart/> : <EmptyHeart/>}
                    </span>
                </a>
            </Link>
        </div>
    );
};
export default Card;
