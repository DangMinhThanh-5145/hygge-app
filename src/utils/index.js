export const getColorByCategory = (category) => {
  switch (category) {
    case "Đồ chơi trẻ em": {
      return "greenColor";
    }
    case "Nước hoa": {
      return "pinkColor";
    }
    case "Mỹ phẩm": {
      return "yellowColor";
    }
    // no default
  }
};
