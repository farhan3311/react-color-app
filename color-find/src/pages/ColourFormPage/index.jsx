import React from "react";

import styles from "../../styles/addColour.module.css";

function ColourForm({ onSubmitForm }) {
  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <div className={styles.input}>
        <label htmlFor="colour-name">Color Name</label>
        <input type="text" name="colour-name" required={true} />
      </div>
      <div className={styles.input}>
        <label htmlFor="colour-name">Hex Value</label>
        <input type="text" name="hex-value" required={true} />
      </div>

      <button className={styles.btn} type="submit">
        Add colour
      </button>
    </form>
  );
}

export default ColourForm;
