import { CSSProperties, ReactNode } from "react";
import { appRouter } from "../server/trpc";

interface ReportSectionInterface {
  children?: ReactNode;
  title: string;
  secondaryText?: string;
  style?: CSSProperties;
  contentWrapperStyle?: CSSProperties;
}

const styles = {
  container: {
    border: "1px solid #064c60",
  },
  headerContainer: {
    backgroundColor: "#064c60",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "1%",
    paddingRight: "3%",
  },
  titleText: {
    color: "#fff",
  },
  childrenWrapper: {
    display: "inline-grid",
    width: "100%",
  },
};

const ReportSection = async (props: ReportSectionInterface) => {
  const { title, children, secondaryText, style, contentWrapperStyle } = props;
  const caller = appRouter.createCaller({});

  const { translatedText } = await caller.getTranslation({
    data: title,
    locale: "fr",
  });
  const { translatedText: secondary } = await caller.getTranslation({
    data: secondaryText || '',
    locale: "fr",
  });
  return (
    <div style={{ ...styles.container, ...style }}>
      <div style={styles.headerContainer}>
        <span style={styles.titleText} translate="yes">
          {translatedText}
        </span>
        <span style={styles.titleText} translate="yes">
          {secondary}
        </span>
      </div>
      <div style={{ ...styles.childrenWrapper, ...contentWrapperStyle }}>
        {children}
      </div>
    </div>
  );
};

export default ReportSection;
