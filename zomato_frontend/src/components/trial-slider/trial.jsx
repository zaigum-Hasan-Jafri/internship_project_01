import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const deliveryItem = [
    {
        _id: 0,
        Title: "Pizza",
        Cover_img: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
    },
    {
        _id: 1,
        Title: "Burger",
        Cover_img: "https://source.unsplash.com/1600x800/?Burger",
    },
    {
        _id: 2,
        Title: "hamBurger",
        Cover_img: "https://source.unsplash.com/1600x800/?Food",
    },
    {
        _id: 3,
        Title: "Pasta",
        Cover_img: "https://source.unsplash.com/1600x800/?Pasta",
    },
    {
        _id: 4,
        Title: "maggie",
        Cover_img: "https://source.unsplash.com/1600x800/?Maggie",
    },
]
const Trial = () => {
    return (
        <div>
            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="...">
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="...">
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="...">
                    </div>
                </div>
            </div> */}

            {/* <Carousel style={{ display: "flex", maxHeight: "300px", paddingTop:"8px"}}>
                <Carousel.Item interval={1000}>
                    <div className='row'>
                        <div className='col'>
                            <img className="w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>First slide label</h6>

                        </div>
                        <div className='col'>
                            <img
                                className="d-inline-flex w-100"
                                src="	https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                                alt="Second slide"
                            />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>First slide label</h6>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='row'>
                        <div className='col'>
                            <img className="w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>Second slide label</h6>

                        </div>
                        <div className='col'>
                            <img className="w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>Second slide label</h6>

                        </div>
                        <div className='col'>
                            <img className="w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>Second slide label</h6>

                        </div>
                        <div className='col'>
                            <img
                                className="d-inline-flex w-100"
                                src="	https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                                alt="Second slide"
                            />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>Second slide label</h6>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='container row'>
                        <div className='d-block col'>
                            <img className="  w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}> Third slide label</h6>

                        </div>
                        <div className='d-block col'>
                            <img className="  w-100" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="Second slide" />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}> Third slide label</h6>

                        </div>
                        <div className='d-block col'>
                            <img
                                className="d-inline-flex w-100"
                                src="	https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
                                alt="Second slide"
                            />
                            <h6 style={{ justifyContent: "center", display: "flex", alignItems: "center" }}>Third slide label</h6>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel> */}

            {/* <Carousel>
                {deliveryItem.map((item, index) => {
                    return <Carousel.Item className="row" key={item._id}>
                        <div className="col">
                            <img src={item.Cover_img} alt="" srcset="" className='d-inline w-100' />
                            <p>{item.Title}</p>
                        </div>
                    </Carousel.Item>
                })}
            </Carousel> */}
        </div>
    )
}

export default Trial