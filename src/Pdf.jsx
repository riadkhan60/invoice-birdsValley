import {
  Page,
  Text,
  Document,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
  },
  container: {
    display: "flex",
    position: "absolute",
    top: 0,
    left: 0,
    gap: 0,
    flexDirection: "row",
    transform: "rotate(30deg) translateX(-220px) translateY(-115px)",
    zIndex: "10",
  },
  viewOne: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(15, 32, 129)",
    position: "relative",
    transform: "translateX(2px)",
  },
  viewTwo: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(22, 25, 51)",
    transform: "translateX(1px)",
  },
  viewThree: {
    width: "120px",
    height: "100vh",
    backgroundColor: "rgb(105, 36, 4)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  headerLeft: {
    zIndex: 1000,
    marginLeft: "30px",
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",

    flexDirection: "column",
  },
  headerLeftMain: {
    color: "rgb(255, 255, 255)",
    fontSize: "41px",
    fontWeight: "heavy",
  },
  headerLeftMainTexts: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "3px",
  },
  headerLeftMainText: {
    color: "rgb(255, 255, 255)",
    fontSize: "12px",
    fontWeight: "bold",
  },

  headerLeftMainTextsCol: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    marginTop: "50px",
    marginLeft: "3px",
  },
  headerLeftMainTextCol: {
    color: "white",
    marginBottom: "10px",
    fontSize: "14px",
  },

  headerLeftMainTextColAddress: {
    fontSize: "13px",
    color: "rgb(204, 203, 203)",
    width: "150px",
    lineHeight: "1.3",
    marginBottom: "10px",
  },
  imageCompany: {
    width: "70px",
    height: "70px",

    borderRadius: "50%",
  },
  headerRight: {
    display: "flex",
    marginRight: "40px",
    marginTop: "30px",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
  },

  headerRightMainText: {
    color: "#ff8800",
    fontSize: "30px",
  },
  table: {
    marginTop: "50px",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "40px",
    marginBottom: "10px",
    borderBottom: "1px solid green",
    paddingBottom: "5px",
    color: "#1d4ff3",
  },
  tableBody: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "40px",
    marginBottom: "10px",
    paddingBottom: "5px",
    borderBottom: "1px solid green",
  },
  tableFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    fontSize: "14px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "40px",
    marginBottom: "10px",
    paddingBottom: "5px",
  },
  tableText: {
    width: "500px",
    textAlign: "right",
  },
  PaymentStatus: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    width: "100%",
  },
  PaymentStatusText: {
    color: "black",
    padding: "30px",
    backgroundColor: "#17f762",
    fontWeight: "bold",
    borderRadius: "10px",
    width: "60%",
  },
  jarImageOne: {
    position: "absolute",
    bottom: "20px",
    left: "50px",
    width: "150px",
    backgroundColor: "rgb(247, 247, 54)",
    borderRadius: "50%",
    padding: "10px",
    transform: "rotate(-28deg)",
  },
  jarImageTwo: {
    position: "absolute",
    bottom: "20px",
    right: "50px",
    width: "150px",
    backgroundColor: "rgb(247, 247, 54)",
    borderRadius: "50%",
    padding: "10px",
    transform: "rotate(28deg)",
  },
  footerText: {
    textAlign: "center",
    width: "180px",
    margin: "auto",
    marginTop: "70px",
  },
  signature: {
    fontSize: "20px",
    marginTop: "40px",
    marginHorizontal: "auto",
    width: "50px",
    borderBottom: "1px solid blue",
    fontFamily: "Sacramento",
  },
});
Font.register({
  family: "Roboto",
  src: "https://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",

});
Font.register({
  family: "Sacramento",
  src: "https://fonts.gstatic.com/s/sacramento/v4/WFDkXpubrEwopJnSlHV6CC3USBnSvpkopQaUR-2r7iU.ttf",
});

// Create Document Component
const MyDocument = ({ data }) => {
  console.log(data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.viewOne}></View>
          <View style={styles.viewTwo}></View>
          <View style={styles.viewThree}></View>
        </View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerLeftMain}>INVOICE</Text>
            <View style={styles.headerLeftMainTexts}>
              <Text style={styles.headerLeftMainText}>Date</Text>
              <Text style={styles.headerLeftMainText}>21 dec 2023</Text>
            </View>
            <View style={styles.headerLeftMainTextsCol}>
              <Text style={styles.headerLeftMainTextCol}>{data.name}</Text>
              <Text style={styles.headerLeftMainTextCol}>+8801795024751</Text>
              <Text style={styles.headerLeftMainTextColAddress}>
                Adalot Para, Tangail Sadar Tangail Lorem ipsum dolor 
              </Text>

              <Text style={styles.headerLeftMainTextColAddress}>
                Lorem ipsum dolor,  Lorem ipsum dolor sit amet, 
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.headerRight}>
              <Image
                src={"./imgs/shop.jpg"}
                style={styles.imageCompany}
              ></Image>
              <Text style={styles.headerRightMainText}>{`Bird's`} Valley</Text>
            </View>
          </View>
        </View>

        <View style={styles.PaymentStatus}>
          <Text style={styles.PaymentStatusText}>Payment Status: PAID ✅</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableText}>S/N</Text>
            <Text style={styles.tableText}>Product Name</Text>
            <Text style={styles.tableText}>Product Quantity</Text>
            <Text style={styles.tableText}>Price</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableText}>01</Text>
            <Text style={styles.tableText}>Nitro</Text>
            <Text style={styles.tableText}>250 gram</Text>
            <Text style={styles.tableText}>500</Text>
          </View>
          <View style={styles.tableBody}>
            <Text style={styles.tableText}>02</Text>
            <Text style={styles.tableText}>Delivery Cost</Text>
            <Text style={styles.tableText}></Text>
            <Text style={styles.tableText}>500</Text>
          </View>
          <View style={styles.tableFooter}>
            <Text style={styles.tableText}></Text>
            <Text style={styles.tableText}></Text>
            <Text style={styles.tableText}>Total =</Text>
            <Text style={styles.tableText}>500</Text>
          </View>
        </View>
        <View style={styles.footerText}>
          <Text>Thank you for buying our products</Text>
          <Text style={styles.signature}>sohan</Text>
        </View>
        <Image src={"/imgs/jarOne.png"} style={styles.jarImageOne}></Image>
        <Image src={"/imgs/jarTwo.png"} style={styles.jarImageTwo}></Image>
      </Page>
    </Document>
  );
};

export default MyDocument;
