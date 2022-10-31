import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import background from '../Images/background.jpg'


const CreateWorkshop = () => {


  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const sendData = () => {

  }

  const [data, setData] = useState({
    name: '',
    venue: '',
    url: '',
    option: ''

  })
  console.log(data);

  return (
    <>
      <div className='w-100 h-100 p-4'>
        <div className=' w-100 h-25 py-3 px-3'>
          <div className='w-100 h-100'>
            <img className='w-100 h-100 rounded-3' src={background} alt="background" />
          </div>
        </div>
        <div className='w-100 h-75 py-3 px-3'>
          <div className='row m-0'>
            <div className="col px-3 py-2">
              <div className='mb-4'>
                <label htmlFor="exampleFormControlInput1" className="form-label label-text p-0">WorkShop Name</label>
                <input name="name" value={data.name} onChange={onChange} type="text" className="form-control border-0 border-bottom rounded-0" id="exampleFormControlInput1" placeholder="Talk Show..." />
              </div>
              <div className='mb-4'>
                <label htmlFor="exampleFormControlInput1" className="form-label label-text p-0">WorkShop Type</label>
                <select name="option" value={data.option} onChange={onChange} className="form-select border-0 border-bottom rounded-0" aria-label="Default select example">
                  <option defaultValue={'default'}>Online / In Person</option>
                  <option value="online">Online</option>
                  <option value="in person">In Person</option>
                </select>
              </div>
              <div className='d-flex flex-column mb-4'>
                <label htmlFor="exampleFormControlInput1" className="form-label label-text p-0">WorkShop Date</label>
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
            <div className="col px-3 py-2">
              <div className='mb-4'>
                <label htmlFor="exampleFormControlInput1" className="form-label label-text p-0">WorkShop Venue</label>
                <input name="venue" value={data.venue} onChange={onChange} type="email" className="form-control border-0 border-bottom rounded-0" id="exampleFormControlInput1" placeholder="Delhi, India" />
              </div>
              {data.option === 'online' ? <div className='mb-4'>
                <label htmlFor="exampleFormControlInput1" className="form-label label-text p-0">WorkShop Url</label>
                <input name="url" value={data.url} onChange={onChange} type="email" className="form-control border-0 border-bottom rounded-0" id="exampleFormControlInput1" placeholder="zoom / google meet url" />
              </div> : null}
            </div>
            <div className='d-flex justify-content-center ' style={{ height: '2.5rem' }}>
              <button onClick={sendData} className='border-0 rounded-4 px-3 btn-text' style={{ backgroundColor: 'red', color: 'white' }}>Create WorkShop</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateWorkshop
