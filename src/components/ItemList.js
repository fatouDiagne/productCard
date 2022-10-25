import Table from 'react-bootstrap/Table';
import Item from './Item';
const ItemList = ({product}) => {
    const handleClick = (name) => {
        return alert(`The name of this is ${name}`)
    }
    return (
        <>
            <div style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px" }}>
                <Table responsive="sm">
                    <thead>
                        <tr style={{ backgroundColor: "#c8d6e5", color: "black" }}>
                            <th>Article</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((value, index) => (
                                <Item value={value} key={index} handleClick={handleClick} />)
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default ItemList;