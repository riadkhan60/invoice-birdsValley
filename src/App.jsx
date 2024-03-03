import { createContext, useState } from "react";
import Navmenu from "./Navmenu";
import Form from "./form";
import TrackFormRcpt from "./TrackFormRcpt";
import { PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import { MdOutlineFileDownload } from "react-icons/md";
import MyDocument from "./Pdf";
import TrackingIDPdf from "./TrackingIDPdf";
import TrackingImage from "./TrackingImage";
const Context = createContext();
function App() {
  const [tab, setTab] = useState("bill");
  const [formData, setFormData] = useState({ open: false });
  const [trackFormData, setTrackFormData] = useState({ open: false });
  return (
    <Context.Provider value={{ formData, setFormData }}>
      <div className="flow-root h-[100vh] overflow-hidden  bg-black ">
        <Navmenu
          setTab={setTab}
          tab={tab}
          setFormData={setFormData}
          setTrackFormData={setTrackFormData}
        />
        <div className="mt-[30px] flex items-center justify-center max-md:mt-0">
          {tab === "bill" && <Form setFormData={setFormData}></Form>}
          {tab === "track" && (
            <TrackFormRcpt setTrackFormData={setTrackFormData} />
          )}
        </div>

        <div className=" mx-auto max-w-[454px] p-0 max-md:p-6 md:mt-6">
          {formData.open && (
            <PDFDownloadLink
              document={<MyDocument data={formData} />}
              fileName={`invoice-${formData.name}`}
            >
              {({ loading }) => {
                if (loading) {
                  return (
                    <button className="btn btn-block uppercase">
                      <span className="loading loading-ring loading-md"></span>
                    </button>
                  );
                }
                return (
                  <button className="btn btn-block uppercase">
                    Download <MdOutlineFileDownload />
                  </button>
                );
              }}
            </PDFDownloadLink>
          )}

          {trackFormData.open && (
            <PDFDownloadLink
              document={<TrackingIDPdf data={trackFormData} />}
              fileName={`tracking-invoice-${trackFormData.name}`}
            >
              {({ loading }) => {
                if (loading) {
                  return (
                    <button className="btn btn-block uppercase">
                      <span className="loading loading-ring loading-md"></span>
                    </button>
                  );
                }
                return (
                  <button className="btn btn-block uppercase">
                    Download <MdOutlineFileDownload />
                  </button>
                );
              }}
            </PDFDownloadLink>
          )}
        </div>
      </div>
      {/* <div className="h-[100vh]">
        <PDFViewer width={`100%`} height={`100%`}>
       
          <MyDocument data={{name: 'Mahmudul Hasan Khan'}}/>
          <TrackingIDPdf />
        </PDFViewer>
      </div> */}
      {/* <TrackingImage data={{name: 'Mahmudul Hasan Khan', phoneNumer: '01711111111', trackingID: 'asdadad'}}/> */}
    </Context.Provider>
  );
}

export default App;
