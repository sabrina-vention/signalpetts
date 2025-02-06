import { type Finding, type Findings } from "../models/finding";
import { appRouter } from "../server/trpc";
import ReportFinding from "./ReportFindingComp";

const ReportFindingWrapper = async ({
  finding,
  isNormal,
  editable,
  locale
}: {
  finding: Finding;
  isNormal: boolean;
  editable: boolean;
  locale: string;
}): JSX.Element => {
  const caller = appRouter.createCaller({});
  const { translatedText } = await caller.getTranslation({
    data: finding.name,
    locale,
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
