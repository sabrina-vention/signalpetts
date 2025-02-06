import { CSSProperties } from "react";
import InputTag from "./InputTag";
import { PatientDetailsModel, patientId } from "../models/patientDetails";
import { convertToReadableString } from "../utils/strings";
import { loadingText } from "../utils/constants";
import patientDetails from "../fetches/fetchPatientDetails.json";
import { caller } from "../server/trpc";

const styles = {
  container: {
    display: "inline-grid",
    gridTemplateColumns: "1fr 1fr",
    width: "98%",
    paddingLeft: "2%",
    paddingBottom: "2%",
  },
  detailContainer: {},
  detailTitle: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 600,
    paddingRight: "10%",
  },
};

interface ParentDetailsSectionInterface {
  patientId: patientId;
  style?: CSSProperties;
  data?: PatientDetailsModel;
  locale: string;
}

const ParentDetailsSection = async (props: ParentDetailsSectionInterface) => {
  const { style, patientId, locale } = props;
  const details = (patientDetails as any)[patientId];

  const { translatedText: services } = await caller.getTranslation({
    data: "",
    multiple: details
      ? Object.keys(details).map((field) => ({
          [field]: convertToReadableString(field),
        }))
      : undefined,
    locale: locale,
  });

  const { translatedText: loading } = await caller.getTranslation({
    data: loadingText,
    locale: locale,
  });

  return (
    <div style={{ ...styles.container, ...style }}>
      {details ? (
        Object.keys(details).map((field) => (
          <div key={field} style={styles.detailContainer}>
            <span style={styles.detailTitle} translate="yes">
              {services[field as keyof typeof services]}
            </span>
            <InputTag>{details[field as keyof typeof details]}</InputTag>
          </div>
        ))
      ) : (
        <span translate="yes">{loading}</span>
      )}
    </div>
  );
};

export default ParentDetailsSection;
