// import { NavLink } from 'react-router-dom';
// import ViewModal from '../components/ViewModal';
// import Button from 'react-bootstrap/Button';

const Card = (props) =>{
   const {thumbnail, price, discountPercentage, title, description} = props.product;
    return (
        <>
                    <div className="card">
                        <div className="card-header text-center">
                            <img src= {thumbnail} className="img-fluid h-100" alt="product" />
                        </div>
                        <div className="card-body">
                            <h4 className="text-center text-truncate"> {title}</h4>
                            <div className="costContainer">
                                <p className="text-success">Price: {price}</p>
                                <p className="text-danger">Discount: {discountPercentage}%</p>
                            </div>
                            <p className="">Description: {description.slice(0,40)+'...'}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button data-bs-toggle="modal" data-bs-target="#viewModal" className="btn btn-primary">View</button>
                            <button className="btn btn-secondary ms-2 me-2">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>

        </>
    )
}
export default Card;