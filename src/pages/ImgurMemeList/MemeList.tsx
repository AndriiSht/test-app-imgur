import { useFetchImgurData } from "hooks";
import { Box } from "@mui/material";
import { Header } from "components";
import { memo } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { MemeListItem } from "./components/MemeListItem";

export const MemeList = memo(() => {
  const { data } = useFetchImgurData();
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" display="flex">
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemCount={data?.data?.length || 0}
              itemSize={600}
              overscanCount={4}
            >
              {({ index, style }) => {
                const item = data?.data?.[index];

                return <MemeListItem index={index} item={item} style={style} />;
              }}
            </FixedSizeList>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
});
