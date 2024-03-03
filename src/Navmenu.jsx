import { RiBillLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
function Navmenu({ setTab, tab, setFormData, setTrackFormData }) {
  return (
    <div className=" flex flex-grow items-center justify-center pt-6">
      <ul className="menu menu-horizontal gap-2 rounded-box bg-base-200">
        <li className="disabled">
          <a className=" font-bold uppercase text-sky-400">{`Bird's`} Valley</a>
        </li>
        <li
          onClick={() => {
            setTab("bill");
            setTrackFormData({ open: false });
          }}
        >
          <a className={`${tab === "bill" ? "active" : ""}`}>
            <RiBillLine />
            <span className=" max-sm:hidden">Bill Receipt</span>
          </a>
        </li>
        <li
          onClick={() => {
            setTab("track");
            setFormData({ open: false });
          }}
        >
          <a className={`${tab === "track" ? "active" : ""}`}>
            <TbLocationFilled />
            <span className=" max-sm:hidden">Tracking Receipt</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navmenu;
