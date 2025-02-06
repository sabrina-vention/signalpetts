import InputTag from "./InputTag";
import { generateXrayAnalysisSummary } from "../utils/strings";
import { appRouter } from "../server/trpc";

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

const ReportAdditionalInformationSection = async () => {
  const caller = appRouter.createCaller({});

  const { translatedText } = await caller.getTranslation({
    data: generateXrayAnalysisSummary(),
    locale: "fr",
  });
  console.log(translatedText);
    return (
        <div translate="yes">
            <span style={styles.title}>Summary: </span>
            <InputTag editable={true}>{translatedText}</InputTag>
        </div>
    );
};

export default ReportAdditionalInformationSection;
