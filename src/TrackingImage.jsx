const styles = {
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
};

function TrackingImage({ data }) {
  return (
    <div style={{ width: "595.28px", height: "841.89px", backgroundColor: "white" }}>
      <div style={styles.pageStyles}>
        <div style={styles.pageContaier}>
          <h3 style={styles.pageHeadingText}>Track Your Percel</h3>
          <h3 style={styles.LogoText}>Bird's Valley</h3>
          <h3 style={styles.TextName}>{data.name}</h3>
          <h3 style={styles.TextPhone}>{data.phoneNumber}</h3>
          <h3 style={styles.TextDetails}>
            visit <a src="https://ecourier.com.bd">ecourier.com.bd</a> then use
            your tracking id bellow to tracking your percel or press to tracking
            link for directly track your percel{" "}
          </h3>
          <h3
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <h3>Tracking Id:</h3>{" "}
            <h3 style={{ fontWeight: "bold" }}>{data.trackingID}</h3>
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <h3>Tracking Link:</h3>{" "}
            <a
              src={
                data.trackingLink
                  ? data.trackingLink
                  : `https://ecourier.com.bd/tracking/?tracking_no=${data.trackingID}`
              }
            >
              visit here
            </a>
          </div>

          <a src="https://birdsvalley.net" style={{ marginTop: "120px" }}>
            birdsvalley.net
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrackingImage;
