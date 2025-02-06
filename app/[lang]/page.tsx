import "../globals.css";
import ReportHeader from "../components/ReportHeader";
import ReportPage from "../components/ReportPage";
import ReportSection from "../components/ReportSection";
import ReportBasicInfoSection from "../components/ReportBasicInfoSection";
import ReportAdditionalInformationSection from "../components/ReportAdditionalInformationSection";
import { additionalInformation } from "../utils/constants";
import { Locale } from "../../i18n-config";

const styles = {
  wrapper: {
    backgroundColor: "#052e39",
    backdropFilter: "blur(2rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as "column",
    gapY: "2rem",
    height: "95%",
  },
};
export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <ReportHeader locale={lang} />
        <ReportPage>
          <ReportBasicInfoSection locale={lang} />
        </ReportPage>
        <ReportPage>
          <ReportSection locale={lang} title={additionalInformation.title}>
            <ReportAdditionalInformationSection locale={lang} />
          </ReportSection>
        </ReportPage>
      </div>
    </div>
  );
}
