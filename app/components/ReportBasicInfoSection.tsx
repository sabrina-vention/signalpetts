import ReportSection from "./ReportSection";
import AddressInfoSection from "./AddressInfoSection";
import ContactInfoSection from "./ContactInfoSection";
import ParentDetailsSection from "./ParentDetailsSection";
import ReportFindings from "./ReportFindings";
import { reportBasicInfo } from "../utils/constants";
import Image from "next/image";
import { caller } from "../server/trpc";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row" as "row",
    width: "90%",
  },
  segmentContainer: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "fit-content",
    textWrap: "nowrap" as "nowrap",
  },
  segmentTitle: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    paddingRight: "10%",
  },
  segmentContent: {},
  segmentImg: {
    width: "8rem",
    gridColumn: 3,
    alignSelf: "center",
  },
};

const ReportBasicInfoSection = async ({ locale }: { locale: string }) => {
  // using createCaller because app directory Nextjs does not support getServerSideProps
  const { translatedText: services } = await caller.getTranslation({
    data: reportBasicInfo.service,
    locale: locale,
  });
  const { translatedText: date } = await caller.getTranslation({
    data: reportBasicInfo.date,
    locale: locale,
  });
  return (
    <div>
      <ReportSection
        locale={locale}
        title={reportBasicInfo.reportTitle}
        secondaryText="ID: 91"
      >
        <div style={styles.container}>
          <div
            style={{
              ...styles.segmentContainer,
              borderRight: "1px solid #064c60",
              paddingRight: "31%",
            }}
          >
            <span style={styles.segmentTitle} translate="yes">
              {services}:
            </span>
            <span style={styles.segmentContent}>SignalRAY</span>
          </div>
          <div style={styles.segmentContainer}>
            <span style={styles.segmentTitle} translate="yes">
              {date}:
            </span>
            <span style={styles.segmentContent}>01-01-1994</span>
          </div>
        </div>
      </ReportSection>
      <ReportSection
        locale={locale}
        title={reportBasicInfo.hospitalDetailsTitle}
        contentWrapperStyle={{
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <AddressInfoSection />
        <ContactInfoSection style={{ gridColumn: 2 }} />
        <Image
          alt="report-logo"
          src="/report-logo.png"
          style={styles.segmentImg}
          width={128}
          height={25}
        />
      </ReportSection>
      <ReportSection
        locale={locale}
        title={reportBasicInfo.patientDetailsTitle}
      >
        <ParentDetailsSection locale={locale} patientId={9} />
      </ReportSection>
      <ReportSection
        locale={locale}
        title={reportBasicInfo.abnormalFindingsTitle}
        secondaryText={reportBasicInfo.confidenceTitle}
      >
        <ReportFindings locale={locale} isNormal={false} editable={true} />
      </ReportSection>
      <ReportSection
        locale={locale}
        title={reportBasicInfo.normalFindingsTitle}
        secondaryText={reportBasicInfo.confidenceTitle}
      >
        <ReportFindings locale={locale} isNormal={true} editable={true} />
      </ReportSection>
    </div>
  );
};

export default ReportBasicInfoSection;
