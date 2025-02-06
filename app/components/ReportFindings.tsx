import { type Finding, type Findings } from "../models/finding";
import { getRandomNumberInRange } from "../utils/numbers";
import { selectRandomObjects } from "../utils/objects";
import { randomXrayFinding } from "../utils/strings";
import normalFindings from "../fetches/fetchNormalFindings.json";
import abnormalFindings from "../fetches/fetchAbnormalFindings.json";
import ReportFindingWrapper from "./FindingWrapper";

const styles = {
  gap3: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "0.75rem", // Equivalent to 3 * 0.25rem
    padding: "0.75rem", // Equivalent to 3 * 0.25rem
  },
  smGap4: {
    display: "flex",
    justifyContent: "space-between",
    gap: "0.5rem", // Equivalent to 2 * 0.25rem
    alignItems: "center",
  },
  smRoundedW8: {
    width: "1.5rem", // Equivalent to w-6
    height: "0.375rem", // Equivalent to h-1.5
    borderRadius: "9999px", // Equivalent to rounded-full
    border: "1px solid #ccc", // Default border color for unfilled state
  },
  gap4: {
    display: "flex",
    alignItems: "center",
    gap: "1rem", // Equivalent to gap-4
  },
  gap25: {
    display: "flex",
    gap: "0.625rem", // Equivalent to gap-2.5
  },
};

const getFindings = (
  isNormal: boolean,
  quantityRange: [number, number],
  generatedQuantityRange: [number, number],
): Findings => {
  let localFindings: Findings = [];
  localFindings = localFindings.concat(
    selectRandomObjects(
      isNormal ? normalFindings : abnormalFindings,
      getRandomNumberInRange(...quantityRange),
    ),
  );

  for (let i = 0; i < getRandomNumberInRange(...generatedQuantityRange); i++) {
    localFindings = localFindings.concat(randomXrayFinding(isNormal));
  }
  return localFindings;
};

interface ReportFindingsProps {
  findings?: Findings;
  isNormal: boolean;
  editable: boolean;
}

const ReportFindings = ({
  findings,
  isNormal,
  editable,
}: ReportFindingsProps): JSX.Element => {
  findings = findings || getFindings(isNormal, [0, 7], [0, 5]);

  return (
    <div style={styles.gap3}>
      {findings.map((finding) =>
        editable || !editable ? (
          <div key={finding.id} style={styles.smGap4}>
            <ReportFindingWrapper
              finding={finding}
              isNormal={isNormal}
              editable={editable}
            />
          </div>
        ) : (
          <></>
        ),
      )}
      <span></span>
    </div>
  );
};

export default ReportFindings;
