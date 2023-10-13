// ColorModeSwitcher.js
import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  const buttonStyle = {
    position: "fixed",
    top: "5px",
    right: "5px",
    
  };

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      style={buttonStyle}
      // zIndex={'overlay'}
    />
  );
}

export default ColorModeSwitcher;
