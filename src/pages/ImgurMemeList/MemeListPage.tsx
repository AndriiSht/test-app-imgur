import { useFetchImgurData } from "hooks";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { memo, useMemo, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { MemeListItem } from "./components//MemeListItem";
import { debounce } from "lodash";
import useMediaQuery from "@mui/material/useMediaQuery";

export const MemeListPage = memo(() => {
  const { data } = useFetchImgurData();
  const [searchString, setSearchString] = useState("");

  // using useMemo as it has same behavior here as useCallback
  // and misses eslint error for react-hooks/exhaustive-deps
  const setSearchStringDebounced = useMemo(() => debounce(setSearchString, 300), [setSearchString]);

  const filteredMemeList = useMemo(
    () =>
      data?.filter((meme) => {
        return (
          meme?.tags?.some((tag) => tag?.display_name?.includes(searchString)) ||
          meme?.images?.some((image) => image?.tags?.some((tag) => tag?.display_name?.includes(searchString)))
        );
      }) || [],
    [data, searchString]
  );
  const widthUnder500 = useMediaQuery("(max-width:500px)");
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Header onSearchStringChange={setSearchStringDebounced} />
      <Box flex="1" display="flex" flexDirection="column" alignItems="center">
        <Box flex="1" maxWidth="600px" width="100%">
          <AutoSizer>
            {({ height, width }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={filteredMemeList.length || 0}
                itemSize={widthUnder500 ? 500 : 600}
                overscanCount={4}
              >
                {({ index, style }) => {
                  const item = filteredMemeList[index];

                  return <MemeListItem index={index} item={item} style={style} />;
                }}
              </FixedSizeList>
            )}
          </AutoSizer>
        </Box>
      </Box>
    </Box>
  );
});
