import { createContext, useState } from "react";
import Navmenu from "./Navmenu";
import Form from "./form";
import TrackFormRcpt from "./TrackFormRcpt";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MdOutlineFileDownload } from "react-icons/md";
import MyDocument from "./Pdf";
const Context = createContext();
function App() {
  const [tab, setTab] = useState("bill");
  const [formData, setFormData] = useState({ open: false });
  return (
    <Context.Provider value={{ formData, setFormData }}>
      <div className="flow-root h-[100vh] bg-black  ">
        <Navmenu setTab={setTab} tab={tab} />
        <div className="mt-[30px] flex items-center justify-center">
          {tab === "bill" && <Form setFormData={setFormData}></Form>}
          {tab === "track" && <TrackFormRcpt />}
        </div>

        <div className=" mx-auto max-w-[454px] p-0 max-md:p-3">
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
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
