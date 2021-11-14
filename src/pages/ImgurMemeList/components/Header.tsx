import {
  AppBar,
  Toolbar,
  FormControlLabel,
  Typography,
  Hidden,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { THEME, useThemeToggleContext } from "context";
import { memo } from "react";
import {
  MaterialUISwitch,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "components";

interface HeaderProps {
  onSearchStringChange: (searchString: string) => void;
}

export const Header = memo(({ onSearchStringChange }: HeaderProps) => {
  const { themePaletteMode, setThemePaletteMode } = useThemeToggleContext();

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Hidden smDown>
          <Typography variant="h6">Imgur App</Typography>
        </Hidden>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => onSearchStringChange(e.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <FormControlLabel
          label=""
          sx={{ mr: 0, ml: 3 }}
          control={
            <MaterialUISwitch checked={themePaletteMode === THEME.DARK} />
          }
          onClick={() =>
            setThemePaletteMode(
              themePaletteMode === THEME.DARK ? THEME.LIGHT : THEME.DARK
            )
          }
        />
      </Toolbar>
    </AppBar>
  );
});
