import React from 'react'

const Card = ({ item, handClick, id }) => {
    const itemClass = item.stat ? ` active ${item.stat}` : ""
    return (
        <div className={"card " + itemClass} onClick={() => handClick(id)}>

            <img src={item.img} alt="" />
        </div >
    )
}

export default Card