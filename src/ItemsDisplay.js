function ItemsDisplay(props) {
    const ShowItems = (item) => {
        return (
            <div>
              <p>ID: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Type: {item.type}</p>
              <p>Brand: {item.brand}</p>
            </div>
          );
    }
  return (
    <div>
      {props.items.map(ShowItems)}
    </div>
  );
}

export default ItemsDisplay;
