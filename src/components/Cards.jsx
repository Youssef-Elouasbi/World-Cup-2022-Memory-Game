import React, { useState } from 'react'
import Card from './Card'

const Cards = () => {
    const [items, setItems] = useState([
        { id: 1, img: './img/argentine.png', stat: "" },
        { id: 2, img: './img/australia.png', stat: "" },
        { id: 3, img: './img/brazil.png', stat: "" },
        { id: 4, img: './img/croit.png', stat: "" },
        { id: 5, img: './img/eng.png', stat: "" },
        { id: 6, img: './img/france.png', stat: "" },
        { id: 7, img: './img/ghana.png', stat: "" },
        { id: 8, img: './img/japon.png', stat: "" },
        { id: 9, img: './img/maroc.png', stat: "" },
        { id: 10, img: './img/pays-bas.png', stat: "" },
        { id: 11, img: './img/port.png', stat: "" },
        { id: 12, img: './img/poland.png', stat: "" },
        { id: 13, img: './img/senegal.png', stat: "" },
        { id: 14, img: './img/spain.png', stat: "" },
        { id: 15, img: './img/suis.png', stat: "" },
        { id: 16, img: './img/united-state.png', stat: "" },
        { id: 1, img: './img/argentine.png', stat: "" },
        { id: 2, img: './img/australia.png', stat: "" },
        { id: 3, img: './img/brazil.png', stat: "" },
        { id: 4, img: './img/croit.png', stat: "" },
        { id: 5, img: './img/eng.png', stat: "" },
        { id: 6, img: './img/france.png', stat: "" },
        { id: 7, img: './img/ghana.png', stat: "" },
        { id: 8, img: './img/japon.png', stat: "" },
        { id: 9, img: './img/maroc.png', stat: "" },
        { id: 10, img: './img/pays-bas.png', stat: "" },
        { id: 11, img: './img/port.png', stat: "" },
        { id: 12, img: './img/poland.png', stat: "" },
        { id: 13, img: './img/senegal.png', stat: "" },
        { id: 14, img: './img/spain.png', stat: "" },
        { id: 15, img: './img/suis.png', stat: "" },
        { id: 16, img: './img/united-state.png', stat: "" },

    ].sort(() => Math.random() - 0.5))
    const [prev, setPrev] = useState(-1)

    function check(current) {
        if (items[current].id == items[prev].id) {
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        } else {
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000);
        }
    }

    function handClick(id) {
        if (prev === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
            console.log(id)
        } else {
            check(id)
            console.log(id)
        }
    }
    return (
        <div className="container">
            {
                items.map((item, index) => {
                    return <Card item={item} key={index} id={index} handClick={handClick} />
                })
            }
        </div>

    )
}

export default Cards