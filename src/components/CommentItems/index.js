import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const CommentItems = (props) => {
  const { review } = props;
  return (
    <Box
      sx={{
        display: "flex",
        pb: 3,
      }}
    >
      <Avatar sx={{ ml: 6, mt: 12 }} src={review?.postedBy?.avatar} />
      <Paper
        sx={{
          ml: 2,
          pl: 1.5,
          pr: 4.5,
          py: 1.5,
          width: "85%",
          mt: 5,
        }}
        variant="outlined"
      >
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography color="textPrimary" variant="subtitle2">
              {review?.postedBy?.firstName} {review?.postedBy?.lastName}
            </Typography>
            <Typography color="textSecondary" variant="caption">
              {review?.postedBy?.address}
            </Typography>
          </div>
          <Typography color="textSecondary" variant="caption">
            {review?.createdAt}
          </Typography>
        </Box>
        <Typography color="textPrimary" variant="body2">
          {review?.content}
        </Typography>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 2,
          }}
        >
          <Typography color="textSecondary" variant="subtitle2">
            Like
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

CommentItems.propTypes = {
  review: PropTypes.object.isRequired,
};

export default CommentItems;
