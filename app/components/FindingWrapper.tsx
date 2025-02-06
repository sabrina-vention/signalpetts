import { type Finding, type Findings } from "../models/finding";
import { appRouter } from "../server/trpc";
import ReportFinding from "./ReportFindingComp";

const ReportFindingWrapper = async ({
  finding,
  isNormal,
  editable,
}: {
  finding: Finding;
  isNormal: boolean;
  editable: boolean;
}): JSX.Element => {
  const caller = appRouter.createCaller({});
  const { translatedText } = await caller.getTranslation({
    data: finding.name,
    locale: "fr",
  });

  return (
    <ReportFinding
      finding={{ ...finding, name: translatedText }}
      isNormal={isNormal}
      editable={editable}
      checked={editable}
    />
  );
};

export default ReportFindingWrapper;
