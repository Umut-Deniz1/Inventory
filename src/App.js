import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import styled from "styled-components";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  const filterData = (data) =>{
    const filterData = [];

    if(!filters.name){
      return data;
    }
    for(const item of data){
      if(filters.name !== "" && item.name !== filters.name){
        continue;
      }

      if(filters.price !== 0 && item.price > filters.price){
        continue;
      }

      if(filters.type !== "" && item.type !== filters.type){
        continue;
      }

      if(filters.brand !== "" && item.brand !== filters.brand){
        continue;
      }
      filterData.push(item)
    }
    return filterData;
  }
  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row m-3">
        <SearchBar updateSearchParaams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
