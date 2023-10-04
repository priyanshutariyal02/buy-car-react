import "./Cards.css";
import car_1 from "../images/car-1.jpg";
import car_2 from "../images/car-2.jpg";
import car_3 from "../images/car-3.jpg";
import car_4 from "../images/car-4.jpg";
import car_5 from "../images/car-5.jpg";
import car_6 from "../images/car-6.jpg";
import people from "../images/people.png";
import hybrid from "../images/hybrid.png";
import speed from "../images/speed.png";
import automatic from "../images/automatic.png";
import favourite from "../images/favourite.png";
function Cards() {
    const carData = [
        {
            id: 1,
            title: 'BMW',
            year: '2021',
            price: '440'
        },
        {
            id: 2,
            title: 'Ford',
            year: '2022',
            price: '1540'
        },
        {
            id: 3,
            title: 'Altroz',
            year: '2020',
            price: '330'
        },
        {
            id: 4,
            title: 'Safari',
            year: '2019',
            price: '790'
        },
        {
            id: 5,
            title: 'Tata EV',
            year: '2024',
            price: '4000'
        },
        {
            id: 6,
            title: 'Tata RR',
            year: '2022',
            price: '1000'
        },
    ]
    return (
        <div className="card">
            <div className="card-container">
                <div className="card-img">
                    <img src={car_1} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[0].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[0].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[0].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-img">
                    <img src={car_2} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[1].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[1].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[1].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-img">
                    <img src={car_3} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[2].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[2].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[2].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-img">
                    <img src={car_4} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[3].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[3].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[3].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-img">
                    <img src={car_5} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[4].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[4].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[4].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card-img">
                    <img src={car_6} alt="" />
                </div>
                <div className="card-details">
                    <div className="card-title">
                        <div>
                            <p> {carData[5].title}</p>
                        </div>
                        <div className="card-year">
                            {carData[5].year}
                        </div>
                    </div>
                    <div className="card-mid">
                        <div className="card-mid-items">
                            <img src={people} alt="people" />
                            <p> People</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={hybrid} alt="hybrid" />
                            <p>Hybrid</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={speed} alt="speed" />
                            <p>6.1km/1-liter</p>
                        </div>
                        <div className="card-mid-items">
                            <img src={automatic} alt="automatic" />
                            <p>Automatic</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-price">
                        <div>
                            <span>${carData[5].price}</span><strong>/month</strong>
                        </div>
                        <div className="card-button">

                            <div>
                                <a href="#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                            <div>
                                <button>Rate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default Cards;