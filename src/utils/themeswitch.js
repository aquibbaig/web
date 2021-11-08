import React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { RiSunLine, RiMoonLine } from "react-icons/ri"

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(RiMoonLine, RiSunLine)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
      variant="ghostThemed"
    />
  )
}
