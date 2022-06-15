import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productSelector from "../../store/selectors/productsSelector";
import { productActions } from "../../store/slices/productSlice";

const FilterItem = (props) => {
  const dispatch = useDispatch();
  const filter = useSelector(productSelector.selectFilter);

  const [value, setValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(
      productActions.setFilter({ ...filter, categories: event.target.value })
    );
  };
  return (
    <FormControl sx={props.sx} size="small">
      <InputLabel id="demo-select-small">Categories</InputLabel>
      <Select value={value} onChange={handleChange} multiple>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.options?.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterItem;
