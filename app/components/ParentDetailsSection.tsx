import { CSSProperties } from "react";
import InputTag from "./InputTag";
import { PatientDetailsModel, patientId } from "../models/patientDetails";
import { convertToReadableString } from "../utils/strings";
import { getRandomNumberInRange } from "../utils/numbers";
import { loadingText } from "../utils/constants";
import patientDetails from "../fetches/fetchPatientDetails.json";

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
}

const ParentDetailsSection = (props: ParentDetailsSectionInterface) => {
    const { style, data: details } = props;
    console.log(details);

    return (
        <div style={{ ...styles.container, ...style }}>
            {details ? (
                Object.keys(details).map((field) => (
                    <div key={field} style={styles.detailContainer}>
                        <span style={styles.detailTitle} translate="yes">
                            {convertToReadableString(field)}
                        </span>
                        <InputTag>
                            {details[field as keyof typeof details]}
                        </InputTag>
                    </div>
                ))
            ) : (
                <span translate="yes">{loadingText}</span>
            )}
        </div>
    );
};

export const getServerSideProps = async () => {
  let details: PatientDetailsModel | undefined;
        setTimeout(() => {
           details = patientDetails[9] as PatientDetailsModel;
           console.log(details);
        }, getRandomNumberInRange(200, 1800));
  return {
    props: {
      data: details,
    },
  };
};

export default ParentDetailsSection;
