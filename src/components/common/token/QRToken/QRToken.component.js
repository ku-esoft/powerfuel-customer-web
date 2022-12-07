import React from "react";
import QRCode from "react-qr-code";
import styles from "./QRToken.module.scss";

const QRToken = (props) => {
  const { value } = props;

  return (
    <div className={styles.wrap}>
      <QRCode
        size={256}
        value={value}
        viewBox={`0 0 256 256`}
        className={styles.qrcode}
      />
    </div>
  );
};

export default QRToken;
