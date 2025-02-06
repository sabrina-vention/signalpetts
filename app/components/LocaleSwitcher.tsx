'use client';

import { useRouter, usePathname } from 'next/navigation';
import { ChangeEventHandler } from 'react';


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
  const router = useRouter();
  const pathname = usePathname();


  const changeLanguage = (event: any) => {
    const newPathname = `/${event.target.value}${pathname.replace(/^\/(en|fr|ru|es)/, '')}`;
    router.push(newPathname);
  };

  return (
    <div style={styles.container}>
      <label htmlFor="dropdown">Choose an option:</label>
      <select
        id="dropdown"
        value='ru'
        onChange={changeLanguage}
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
