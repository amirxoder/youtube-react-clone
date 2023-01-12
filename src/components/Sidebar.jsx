import React from "react";
import { Hidden, Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => {
  const selectedCategory = "New";

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          style={{
            background: item.name === selectedCategory && "#fc1503",
            color: "#fff",
          }}
          key={item.name}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              opacity: item.name === selectedCategory ? "1" : ".7",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
