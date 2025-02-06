'use client';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const styles = {
  container: {
    borderRight: "2px solid #064c60",
    paddingRight: "2%",
  },
  title: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
  },
  addressText: {
    paddingLeft: "0.5rem",
  },
  addressTextWrapper: {
    display: "flex",
    flexDirection: "row" as "row",
  },
};

const LocaleSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Handle change of selection
  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={styles.container}>
      <label htmlFor="dropdown">Choose an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select language</option>
        <option value="fr">fr</option>
        <option value="en">en</option>
        <option value="de">de</option>
        <option value="es">es</option>
        <option value="pt">pt</option>
      </select>
    </div>
  );
};

export default LocaleSwitcher;
