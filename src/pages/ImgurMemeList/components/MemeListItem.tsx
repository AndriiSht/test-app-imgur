import { Close } from "@mui/icons-material";
import { Chip, Divider, IconButton, Modal, Paper, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import { Box } from "@mui/system";
import { Image, ImgurData } from "hooks";
import { useState } from "react";

interface MemeListItemProps {
  index: number;
  style: CSSProperties;
  item: ImgurData["data"][0] | undefined;
}

interface ModalImgProps {
  link: string;
  onClose: () => void;
}

const ModalImg = ({ link, onClose }: ModalImgProps) => {
  return (
    <Modal open={true} onClose={onClose}>
      <Box display="flex" flexDirection="column" height="100%">
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box flex="1" position="relative" sx={{ margin: 3 }}>
          <img
            onClick={onClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src={link}
            alt="imgur meme"
          />
        </Box>
      </Box>
    </Modal>
  );
};

interface MediaProps {
  image: {
    type?: Image["type"];
    link?: Image["link"];
    description?: Image["description"];
  };
}

const Media = ({ image }: MediaProps) => {
  const [linkForModal, setLinkForModal] = useState("");
  if (image?.type?.includes("image")) {
    return (
      <>
        <img
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "contain",
            cursor: "pointer",
          }}
          onClick={() => setLinkForModal(image?.link || "")}
          src={image?.link}
          alt={image?.description?.toString() || "imgur image"}
        />
        {Boolean(linkForModal) && <ModalImg link={linkForModal} onClose={() => setLinkForModal("")} />}
      </>
    );
  }
  if (image?.type?.includes("video")) {
    return (
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        src={image?.link}
        controls
        loop
      />
    );
  }
  return <p>No media attached</p>;
};

export const MemeListItem = ({ index, style, item }: MemeListItemProps) => {
  const finalItem = item?.type && item?.link ? item : item?.images[0];
  return (
    <Box
      key={index}
      sx={{
        ...style,
        display: "flex",
        flexDirection: "column",
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
        <Divider sx={{ mx: -3, mb: 3 }} />
        <Box flex="1" position="relative">
          <Media image={finalItem as Image} />
        </Box>
        <Divider sx={{ mx: -3, mb: 3 }} />
        <Box sx={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {item?.tags.map((tag) => (
            <Chip
              key={tag.display_name}
              label={`#${tag.display_name}`}
              variant="outlined"
              sx={{ mr: 1, "&:last-child": { mr: 0 } }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};
