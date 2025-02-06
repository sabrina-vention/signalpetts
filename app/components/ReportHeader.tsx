import { reportHeader } from "../utils/constants";
import Image from "next/image";
import { caller } from "../server/trpc";
import LocaleSwitcher from "./LocaleSwitcher";

const styles = {
  container: {
    backgroundColor: "#064c60",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    padding: "1rem",
    width: "100%",
  },
  logo: {
    width: "10rem",
  },
  secondaryText: {
    color: "#fff",
  },
};

const ReportHeader = async ({ locale }: { locale: string }) => {

  // using createCaller because app directory Nextjs does not support getServerSideProps
  const { translatedText } = await caller.getTranslation({
    data: reportHeader.secondaryText,
    locale:locale,
  });

  return (
    <div style={styles.container}>
      <Image src="/logo.png" alt="Logo" width={160} height={30} />
      <LocaleSwitcher />
      <span style={styles.secondaryText} translate="yes">
        {translatedText}
      </span>
    </div>
  );
};

export default ReportHeader;
