import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim()) {
      // dispatch(getPostsBySearch({ search }));
      navigate(`/loads/search?searchQuery=${search || "none"}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <TextField
        name="search"
        label="From"
        onKeyPress={handleKeyPress}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={searchPost}>Search</Button>
    </>
  );
};

export default Search;
