import { Box, TextField } from "@mui/material";
import React from "react";
import FilterItem from "./FilterItem";

const Filter = (props) => {
  return (
    <Box sx={{ mb: 5, display: "flex" }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          ml: 4,
        }}
      >
        <TextField fullWidth label="Search Product" id="fullWidth" />
      </Box>
      <FilterItem
        filterName="Color"
        label="Color"
        value="Green"
        value1="Pink"
        value2="Orange"
        sx={{ m: 1, minWidth: 130, ml: 10 }}
      />
      <FilterItem
        filterName="Categories"
        label="Categories"
        options={[
          { label: "Đồ chơi trẻ em", value: "Đồ chơi trẻ em" },
          { label: "Nước hoa", value: "Nước hoa" },
          { label: "Mỹ phẩm", value: "Mỹ phẩm" },
        ]}
        sx={{ m: 1, minWidth: 130, ml: 2 }}
      />
      <FilterItem
        filterName="Price Range"
        label="Price Range"
        value="0-1 Triệu Đồng"
        value1="1-2 Triệu Đồng"
        sx={{ m: 1, minWidth: 130, ml: 2 }}
      />
      <FilterItem
        filterName="Country"
        label="Country"
        value="Australia"
        value1="Canada"
        value2="USA"
        sx={{ m: 1, minWidth: 130, ml: 2 }}
      />
    </Box>
  );
};

export default Filter;
