import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
import blogPostCSS from "./blog-post";

// theme.js
// source: https://material.io/design/color/dark-theme.html
const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('light.ghost', '#121212')(props)
      },
      ...blogPostCSS(mode, props),
      ".chakra-breadcrumb__link:hover": {
        textDecoration: "none"
      },
    }),
  },
  components: {
    Button: {
      variants: {
        "with-shadow": (props) => ({
          color: props.colorMode === "dark" ? "white" : "light.secondary",
          borderRadius: "sm"
        }),
        "success": (props) => ({
          bg: props.colorMode === "dark" ? "#2D9E64" : "#EEF8F5",
          color: props.colorMode === "light" ? "#218856" : "#EEF8F5",
          borderRadius: "md"
        }),
        "warning": (props) => ({
          bg: props.colorMode === "dark" ? "#d89614" : "#FFFAF0",
          color: props.colorMode === "light" ? "#d89614" : "#FFFAF0",
          borderRadius: "md"
        }),
        "info": (props) => ({
          bg: props.colorMode === "dark" ? "#8F9FD2" : "#F4F7FF",
          color: props.colorMode === "light" ? "#8F9FD2" : "#F4F7FF",
          borderRadius: "md"
        }),
        "themedPurple": (props) => ({
          bg: props.colorMode === "dark" ? "#39495D" : "#B2C4FE",
          color: props.colorMode === "light" ? "#39495D" : "#B2C4FE",
          borderRadius: "md"
        }),
        "ghostThemed": (props) => ({
          bg: props.colorMode === "dark" ? "#252525" : "#ebebeb",
          borderRadius: "md"
        }),
        "plain": (props) => ({
          bg: "transparent",
          borderRadius: "md"
        })
      }
    },
    Accordion: {
      parts: ["container", "button", "panel", "icon"],
      baseStyle: props => ({
        container: {
          padding: 0,
          border: 0
        },
        button: {
          padding: 0,
          _focus: {
            boxShadow: 0
          }
        }
      })
    }
  },
  colors: {
    transparent: "transparent",
    light: {
      primary: "white",
      secondary: "#2F5393",
      secondaryTextColor: "#616161",
      ghost: "#f5f5f5"
    },
    dark: {
      primary: "#121212",
      secondary: "#67A9ED",
      secondaryTextColor: "#b3b3b3",
    },
    // ...
  },
})

export default theme;
