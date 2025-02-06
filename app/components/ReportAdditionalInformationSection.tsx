import InputTag from "./InputTag";
import { generateXrayAnalysisSummary } from "../utils/strings";
import { caller } from "../server/trpc";

const styles = {
  title: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    paddingRight: "10%",
    alignSelf: "center",
    justifyCenter: "center",
    alignText: "center",
  },
};

const ReportAdditionalInformationSection = async ({
  locale,
}: {
  locale: string;
}) => {
  const { translatedText } = await caller.getTranslation({
    data: generateXrayAnalysisSummary(),
    locale,
  });
  return (
    <div translate="yes">
      <span style={styles.title}>Summary: </span>
      <InputTag editable={true}>{translatedText}</InputTag>
    </div>
  );
};

export default ReportAdditionalInformationSection;
