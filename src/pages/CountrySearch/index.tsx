import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";

import { useHistory } from "react-router-dom";

const CountrySearch: React.FC = () => {
  const history = useHistory();

  const [countryName, setCountryName] = useState<string>("");

  return (
    <Container component="main" maxWidth="xs">
      <div className="search">
        <form
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            history.push(`${countryName}`);
          }}
        >
          <TextField
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
            id="country-name"
            label="Country Name *"
            variant="outlined"
            fullWidth
						inputProps={{ "data-testid": "search-input" }}
          />
          <Button
            data-testid="country-submit-btn"
            disabled={countryName.length < 1}
            variant="contained"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default CountrySearch;
