import Typography from "typography";

const typography = new Typography({
  backgroundColor: "#0a0a0a",
  baseFontSize: "16px",
  baseLineHeight: 2,
  scaleRatio: 1.8,
  googleFonts: [
    {
      name: "Lato",
      styles: ["400", "700"]
    }
  ],
  headerFontFamily: ["Lato", "sans-serif"],
  bodyFontFamily: ["Lato", "sans-serif"],
  headerColor: "#fff",
  bodyColor: "#fff",
  lightBodyColor: "#aaa",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      lineHeight: "2.5rem"
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 700
    },
    li: {
      marginBottom: rhythm(0.1)
    },
    a: {
      color: "#dcd932",
      textDecoration: "none"
    },
    "a:hover": {
      opacity: 0.8
    },
    blockquote: {
      borderLeft: "solid 10px #ddd",
      fontStyle: "italic",
      marginLeft: "1rem",
      paddingLeft: "1rem"
    },
    'pre[class*="language-"]': {
      padding: "1em !important"
    },
    code: {
      fontSize: "1em"
    },
    ':not(pre) > code[class*="language-"]': {
      background: "#fff !important",
      fontSize: ".9em",
      color: "hsla(0,0%,8%,0.8) !important",
      textShadow: "none !important"
    }
  })
});

typography.injectStyles();

export default typography;