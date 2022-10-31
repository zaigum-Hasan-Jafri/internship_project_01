
import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchItem from '../../components/Searchitem/SearchItem.jsx'
import useFetch from '../../components/Hooks/useFetch.js'
import "./Lists.css"
import Pagination from '../../components/Pagination/Pagination.jsx'
const Lists = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.input);
    const [mealType, setMealType] = useState(location.state.search);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    //url and url conditions
    let url;
    destination ? mealType ? url = `http://localhost:5000/hotel/allhotel?city_name=${destination || undefined}&type.name=${mealType || undefined}&min=${min || 1}&max=${max || 1000}` : url = `http://localhost:5000/hotel/allhotel?city_name=${destination || undefined}&min=${min || 1}&max=${max || 1000}` : url = `http://localhost:5000/hotel/allhotel?min=${min || 1}&max=${max || 1000}`
    const { data, loading,refetchData } = useFetch(url)

    //Pagination concept
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(3);
    //getting current page
    const indexOfLastData = currentPage * perPage;
    const indexOfFirstData = indexOfLastData - perPage;
    const currentPageData = data.slice(indexOfFirstData, indexOfLastData);

    //setCurrentPage and onClick event
    const paginate = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    // console.log(data);
    const handleClick = () => {
        refetchData();
    }
    return (
        <div>
            <hr className='mt-0 mb-5' />
            <div className="conatainer">
                <div className="list-wrapper" >
                    <div className="list-search ">
                        <h1 className=' center'>Welcome</h1>
                        <div className="search-item">
                            <label htmlFor="">Your Destination</label>
                            <input style={{}} placeholder={destination} type="text" onChange={e => setDestination((e.target.value).charAt(0).toUpperCase() + (e.target.value).slice(1))} />
                        </div>
                        <div className="search-item">
                            <label htmlFor="">Meal Type</label>
                            <input placeholder={mealType} type="text" onChange={e => setMealType(e.target.value)} />
                        </div>
                        <div className="search-item-option">
                            <label htmlFor="" className='center text-light fs-4 mb-3 fw-bolder'>Other Options</label>
                            <div className="option-item ">
                                <span className="option-item-text">
                                    Min Price <small>per person</small>
                                </span>
                                <input type="number" style={{ height: "22px", width: "72px" }} onChange={(e) => setMin(e.target.value)} />
                            </div>
                            <div className="option-item ">
                                <span className="option-item-text">
                                    Max Price <small>per person</small>
                                </span>
                                <input type="number" style={{ height: "22px", width: "72px" }} onChange={(e) => setMax(e.target.value)} />
                            </div> <br />
                            <div className="center" style={{ display: "flex", flexDirection: "column" }}>
                                <span className="option-item-text d-block">
                                    {/* Sort Price */}
                                </span>
                                <div className="">
                                    {/* <Sort data={data} loading={loading} /> */}
                                </div>
                            </div>
                        </div>
                        <button style={{ border: "none", width: "100%", padding: "10px", backgroundColor: "lightseagreen" }} onClick={handleClick}>Search</button>
                        <div className='center mt-4'>
                        <Pagination perPage={perPage} totalData={data.length} paginate={paginate}/>
                        </div>
                    </div>
                    <div className="list-result">
                        {
                            loading ? "Please Wait for a While" : <>
                                {currentPageData && currentPageData.map((item, i) => {
                                    return (
                                        <SearchItem key={item._id} item={item} i={i} />
                                    )
                                })}
                            </>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Lists)
