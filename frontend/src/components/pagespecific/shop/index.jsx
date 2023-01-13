import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FilterBar from './FilterBar'
import styles from './index.module.scss'
import ProductsContainer from './Products'

const ShopContainer = () => {
  const [appData, setAppData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState([0, 1000]);
  const [category, setCategory] = useState([
    { id: 1, checked: false, label: `Men's Clothing` },
    { id: 2, checked: false, label: 'Jewelery' },
    { id: 3, checked: false, label: 'Electronics' },
    { id: 4, checked: false, label: `Women's Clothing` },
  ]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sort, setSort] = useState('')
  const [searchInput, setSearchInput] = useState('')

  // handle rating 
  const handleSelectRating = (event, value) => {
    if (!value) {
      return null
    } else {
      setSelectedRating(value)
      console.log(parseInt(value))
    }
  }
  // handle price 
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  // handle category 
  const handleChangeChecked = (id) => {
    const categoryStateList = category;
    const changeCheckedCategory = categoryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategory(changeCheckedCategory);
  };

  useEffect(() => {
    setLoading(true)
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setAppData(res.data)
        setList(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleSorting = (e) => {
    setSort(e.target.value)
  }
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }
  const openfilterRes = () => {
    const filterbar = document.getElementById("filterBar")
    if (filterbar.style.display === "none") {
      filterbar.style.display = "block"
    } else {
      filterbar.style.display = "none"
    }
  }
  const applyFilters = () => {
    let updatedList = appData;
    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating.rate) === parseInt(selectedRating)
      );
    }

    // Category Filter
    const categoryChecked = category
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoryChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoryChecked.includes(item.category)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter((item) =>
        item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter((item) =>
      item.price >= minPrice && item.price <= maxPrice
    );

    // sorting 
    if (sort === "asce") {
      updatedList = updatedList.sort((a, b) => {
        return a.title > b.title ? 1 : -1
      })
    } else if (sort === "desc") {
      updatedList = updatedList.sort((a, b) => {
        return b.title > a.title ? 1 : -1
      })
    } else if (sort === "cheap") {
      updatedList = updatedList.sort((a, b) => {
        return a.price > b.price ? 1 : -1
      })
    } else if (sort === "expensive") {
      updatedList = updatedList.sort((a, b) => {
        return b.price > a.price ? 1 : -1
      })
    } else if (sort === "low-rate") {
      updatedList = updatedList.sort((a, b) => {
        return a.rating.rate > b.rating.rate ? 1 : -1
      })
    } else if (sort === "high-rate") {
      updatedList = updatedList.sort((a, b) => {
        return b.rating.rate > a.rating.rate ? 1 : -1
      })
    } else if (sort === "default") {
      setSort("")
    }

    //update data
    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedPrice, category, selectedRating, sort, searchInput]);

  return (
    <div className={styles.container}>
      <FilterBar
        selectedPrice={selectedPrice}
        handleChangePrice={handleChangePrice}
        category={category}
        changeCheckedCategory={handleChangeChecked}
        selectedRating={selectedRating}
        selectRating={handleSelectRating}
      />
      <ProductsContainer
        loading={loading}
        data={list}
        handleSorting={handleSorting}
        handleSearch={handleSearch}
        openfilterRes={openfilterRes} />
    </div>
  )
}

export default ShopContainer