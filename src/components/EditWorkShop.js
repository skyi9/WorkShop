import React from 'react'
import TextField from '@material-ui/core/TextField';
import background from '../Images/background.jpg'

const EditWorkShop = () => {
    return (
        <>
            <div className='w-100 h-100 p-4'>
                <div>
                    <h2>Edit WorkShop - TalkShow</h2>
                </div>
                <div className=' w-100 h-25 py-3 px-3'>
                    <div className='w-100 h-100'>
                        <img className='w-100 h-100 rounded-3' src={background} alt="background" />
                    </div>
                </div>
                <div className='w-100 h-75 py-3 px-3'>
                    <div className='row m-0'>
                        <div className="col">
                            <div>
                                <label htmlFor="exampleFormControlInput1" className="form-label">WorkShop Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Talk Show..." />
                            </div>
                            <div>
                                <label htmlFor="exampleFormControlInput1" className="form-label">WorkShop Type</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option defaultValue={'default'}>Online / In Person</option>
                                    <option value="1">Online</option>
                                    <option value="2">In Person</option>
                                </select>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="exampleFormControlInput1" className="form-label">WorkShop Date</label>
                                <TextField
                                    id="date"
                                    type="date"
                                    defaultValue="2017-05-24"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col">

                            <div>
                                <label htmlFor="exampleFormControlInput1" className="form-label">WorkShop Url</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="zoom / google meet url" />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button>Update WorkShop</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditWorkShop
