import { Paper, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { Box } from "@mui/system";
import { ImgurData } from "hooks";

interface MemeListItemProps {
  index: number;
  style: CSSProperties;
  item: ImgurData["data"][0] | undefined;
}

export const MemeListItem = ({ index, style, item }: MemeListItemProps) => {
  return (
    <Box
      key={index}
      sx={{
        ...style,
        display: "flex",
        flexDirection: "column",
        maxWidth: "600px",
        "&:last-child > .MuiPaper-root": {
          mb: (t) => `${t.spacing(2)}!important`,
        },
      }}
    >
      <Paper
        sx={{
          flex: 1,
          overflow: "hidden",
          mt: 2,
          mx: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ my: 2 }}>
          {item?.title}
        </Typography>
        <Box flex="1" position="relative">
          {
            item?.images?.map((image) => {
              if (image.type.includes("image")) {
                return (
                  <img
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    // loading="lazy"
                    src={image.link}
                    alt={image.description?.toString() || "imgur image"}
                  />
                );
              }
              if (image.type.includes("video")) {
                return (
                  <video
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                    src={image.link}
                    controls
                    loop
                  />
                );
              }
              return <span>no media found</span>;
            })[0]
          }
        </Box>
      </Paper>
    </Box>
  );
};
