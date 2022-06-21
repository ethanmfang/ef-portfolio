import { CopyToClipboard } from "react-copy-to-clipboard";
import "./popText.css";
import React, { useState } from "react";

const Email = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 200);
  };

  return (
    <div className="Email">
      <CopyToClipboard text="ethanmfang@gmail.com" onCopy={handleCopy}>
        <button className="copy">
          <div>ethanmfang@gmail.com</div>
          <i className="fa-regular fa-copy" />
        </button>
      </CopyToClipboard>
      <div className={copied === true ? "popTextAction" : "popText"}>
        Email Copied!
      </div>
    </div>
  );
};
export default Email;
