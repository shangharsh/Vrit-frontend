const ViewModal = () =>{
    return(
        <>
        <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">View Product htmlForm</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form action="">
                  <div className="form-floating">
                    <img src="" id="viewImage" className="w-100" alt="productimage"/>
                    <label htmlFor="floatingInput">Product Image</label>
                  </div>
                  <div className="form-floating mt-2">
                    <input type="text" className="form-control" id="viewTitle" placeholder="Enter product title here"/>
                    <label htmlFor="floatingInput">Product Title</label>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-floating mt-2">
                        <input type="number" className="form-control" id="viewPrice" placeholder="Enter price here"/>
                        <label htmlFor="floatingInput">Product Price</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mt-2">
                        <input type="number" className="form-control" id="viewDiscount" placeholder="Enter discount here"/>
                        <label htmlFor="floatingInput">Product Discount</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mt-2">
                    <textarea type="text" className="form-control" id="viewDescription" placeholder="Enter product description here"></textarea>
                    <label htmlFor="floatingInput">Product Description</label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" id="closeBtn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default ViewModal;