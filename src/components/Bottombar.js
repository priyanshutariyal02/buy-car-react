import "./Bottombar.css";
import previous from '../images/previous.png'
import next from '../images/next.png'


function Bottombar() {

    return (
        <div className="btt-body">
            <div>
                <p>1 from 10</p>
            </div>
            <div className="btt-button">
                <a href="#"><img src={previous} alt="previous" /></a>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#">9</a></li>
                    <li><a href="../pages/Page10.js">10</a></li>
                </ul>
                <a href="../pages/Page10.js"><img src={next} /></a>
            </div>
        </div>
    );
}

export default Bottombar;
