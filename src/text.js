import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
 
const TEXTS = [
  "IT-Consulting",
  "Entwicklung",
  "Beratung",
  "Webseiten",
];
 
const Text = () => {
  const [index, setIndex] = React.useState(0);
 
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
  });
 
  return (
    <h3>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h3>
  );
};
export default Text