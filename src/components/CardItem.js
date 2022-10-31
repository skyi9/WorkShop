import React from 'react'
import background from '../Images/background.jpg'
import edit from '../Images/edit.svg'
import calender from '../Images/calender.svg'
import network from '../Images/network.svg'

const CardItem = (props) => {
    return (
        <>
            <div className="card mb-5">
                <div className="card-body p-0">
                    <div className='w-100'>
                        <img style={{ height: '10rem' }} className='w-100 ' src={background} alt={background} />
                    </div>
                    <div className='p-4'>
                        <div className='d-flex flex-row justify-content-between'>
                            <h5 className="card-title btn-text ">Talk Show</h5>
                            <p style={{ backgroundColor: '#20AFEC', color: '#2608DF', borderRadius: '15px', padding: '0 1rem' }} htmlFor="">Online</p>
                        </div>
                        <p className="card-text"> <img className='me-2' src={calender} alt="" /> 29th Oct 2022 , 9.15 pm</p>
                        <a href="/" style={{ textDecoration: 'none' }} className="link-primary"> <img className='me-2' src={network} alt="" />https://meet.google.co......</a>
                    </div>
                    <div className='d-flex justify-content-end px-4 mb-4'>
                        <img style={{ width: '.8rem' }} src={edit} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem
