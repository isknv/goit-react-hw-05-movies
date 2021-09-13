import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const onInputChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return alert("Please enter query");
    }

    history.push({ ...location, search: `query=${searchQuery}` });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <FormControl
            onChange={onInputChange}
            value={searchQuery}
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </form>
    </div>
  );
}
