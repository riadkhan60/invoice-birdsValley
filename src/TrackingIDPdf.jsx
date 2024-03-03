import {
  Page,
  View,
  Text,
  Document,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  pageStyles: {
    textAlign: "center",
    fontFamily: "Roboto",
  },

  pageContaier: {
    backgroundColor: "#f1f1f1",
    width: "80%",
    height: "80%",
    margin: "auto",
    borderRadius: "40px",
  },

  pageHeadingText: {
    marginTop: "30px",
  },

  LogoText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: "25px",
    fontSize: "32px",
    color: "#02C137",
  },

  TextName: {
    fontFamily: "Roboto",
    fontSize: "36px",
    marginTop: "60px",
    fontWeight: "bold",
  },

  TextPhone: {
    fontSize: "24px",
    marginTop: "15px",
  },
  TextDetails: {
    fontSize: "16px",
    marginTop: "27px",
    paddingHorizontal: "100px",
  
  },
});

function TrackingIDPdf({data}) {
  return (
    <Document>
      <Page style={styles.pageStyles}>
        <View style={styles.pageContaier}>
          <Text style={styles.pageHeadingText}>Track Your Percel</Text>
          <Text style={styles.LogoText}>Bird's Valley</Text>
          <Text style={styles.TextName}>{data.name}</Text>
          <Text style={styles.TextPhone}>{data.phoneNumber}</Text>
          <Text style={styles.TextDetails}>
            visit <Link src="https://ecourier.com.bd">ecourier.com.bd</Link>{" "}
            then use your tracking id bellow to tracking your percel or press to
            tracking link for directly track your percel{" "}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <Text>Tracking Id:</Text>{" "}
            <Text style={{ fontWeight: "bold" }}>{data.trackingID}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Text>Tracking Link:</Text>{" "}
            <Link
              src={data.trackingLink ? data.trackingLink : `https://ecourier.com.bd/tracking/?tracking_no=${data.trackingID}`}
            >
              visit here
            </Link>
          </View>

          <Link src="https://birdsvalley.net" style={{ marginTop: "120px" }}>
            birdsvalley.net
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default TrackingIDPdf;
