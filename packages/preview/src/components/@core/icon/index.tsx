import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import React from "react";

function Icon({ icon, name, highlightPattern = null }) {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef(null);

  const downloadSvgFile = () => {
    if (ref.current) {
      const svg = ref.current.innerHTML;
      const importIcon = `import Icon from "../assets/icons/${name}.svg"; \n`;
      const importRWN = `import { Svg } from "react-with-native"; \n`;
      const svgTag = `<Svg src={Icon} className="w-8 h-8" />`;
      const contentToCopy = importIcon + importRWN + svgTag;
      copy(contentToCopy);

      const data = new Blob([svg], { type: 'text/plain' });
      window.URL.createObjectURL(data);
      download(svg);
      toast.success(`Download '${name}'`, {
        position: "bottom-center",
      });
    }
  };

  const download = (svg: string) => {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svg));
    element.setAttribute('download', name + '.svg');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const highlightedName = () => {
    if (highlightPattern)
      return name
        .split(highlightPattern)
        .map((part) => (part.match(highlightPattern) ? <b>{part}</b> : part));
    return name;
  };

  return (
    <div className="item" tabIndex={0} key={name} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <div className="icon h2" ref={ref}>{typeof icon === "function" && icon()}</div>
      <div className="name">{highlightedName()}</div>
      {visible && (
       <div className="tooltip">
          <button onClick={downloadSvgFile}>download <br/>& copy</button>
        </div>
      )}
    </div>
  );
}

export default Icon;