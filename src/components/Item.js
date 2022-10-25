
const Item = (value, handleClick)=> {
    return (
        <>
            <tr>
                <td>
                    <img style={{ width: "200px", height: "150px", marginTop: "20px" }} src={value.value.image} alt="" />
                </td>
                <td>
                    <h3>{value.value.name}</h3>
                </td>
                <td>
                    <h3>{value.value.price}</h3>
                </td>
                <td>
                    <button style={{borderRadius:"5px", backgroundColor:"#c8d6e5", borderWidth:"2px"}} onClick={()=>value.handleClick(value.value.name)}>
                        click Me
                    </button>
                </td>
            </tr>
            {console.log(value)}

        </>
    );
}

export default Item;