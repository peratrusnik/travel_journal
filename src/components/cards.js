import React from 'react'

function Cards(props) {
    return (
        <div className="cards">
            <div className="card--border">
            <div className="card">
                <img src={`images/${props.item.imageUrl}`} className='picture' />                
                <div className="card--main">
                    <div className="card--head">
                        <img src="images/map.png" className='map' />
                            <h5 className='card--county'>{ props.item.location }</h5>
                        <a className='card--view--google' href={`${props.item.googleMapsUrl}`} target="_blank">View on Google Maps</a>
                    </div>
                        <h1 className='card--title'>{ props.item.title }</h1>
                        <p className='card--date'>{ props.item.startDate + " - " + props.item.endDate}</p>
                        <p className='card--description'>{ props.item.description}</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Cards