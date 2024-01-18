import React, { useState } from "react";

function UserSearch({ data }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);

    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filteredResults);
  };
}

export default UserSearch;
