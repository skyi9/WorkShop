import React from 'react'
import CardItem from './CardItem'

const DisplayWorkshop = () => {
    return (
        <>
            <div className='h-100 p-4'>

                <div className="row m-0 h-50">
                    <div className="col w-50">
                        <CardItem />
                    </div>
                    <div className="col w-50">
                        <CardItem />
                    </div>
                </div>
                <div className="row m-0 h-50">
                    <div className="col w-50">
                        <CardItem />
                    </div>
                    <div className="col w-50">
                        <CardItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayWorkshop
