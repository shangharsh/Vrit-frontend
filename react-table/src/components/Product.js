import {Card, CardTitle, CardBody, CardFooter, Button} from 'react-bootstrap';
const ProductContainer = ({products}) => {
  return (
    <>
    <h4 className='text-center'>Products</h4>
    <div className="d-flex flex-wrap justify-content-center gap-3">
    {products.map(({id,title,thumbnail,description})=>{
        return (
            <Card key={id} style={{ width: '18rem', height: '380px' }}>
                <CardTitle className='h-50 p-2'>
                    <Card.Img variant="top" className='h-100' src={thumbnail} />
                </CardTitle>
                <CardBody>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text>{description.slice(0,40)+'...'}</Card.Text>
                </CardBody>
                <CardFooter className='text-center d-flex justify-content-evenly'>
                    <Button variant="primary">View</Button>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </CardFooter>
            </Card>
        );
    })}
    </div>
    </>
  )
}

export default ProductContainer;