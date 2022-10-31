import React from 'react'
import "../App.css"
import CreateWorkshop from './CreateWorkshop'
import DisplayWorkshop from './DisplayWorkshop'

const OffCanvas = () => {
    return (
        <>
            <div className='row main-wrapper' >
                <div className='col-3 '>
                    <div className='section border border-1 list-group' id="list-tab" role="tablist">
                        <div className='w-100 mt-6'>
                            <a className='list-group-item list-group-item-action active' id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                                Create WorkShop
                            </a>
                            <a className='list-group-item list-group-item-action' id="list-home-list2" data-bs-toggle="list" href="#list-home2" role="tab" aria-controls="list-home2">
                                Display WorkShop
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-9' style={{}}>
                    <div className='section2 tab-content' id="nav-tabContent">
                        <div className="tab-pane fade show active h-100 w-100" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <CreateWorkshop />
                        </div>
                        <div className="tab-pane fade h-100 w-100" id="list-home2" role="tabpanel" aria-labelledby="list-home-list2">
                            <DisplayWorkshop />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OffCanvas
