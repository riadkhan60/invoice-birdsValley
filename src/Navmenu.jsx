import { RiBillLine } from "react-icons/ri";
import { TbLocationFilled } from "react-icons/tb";
function Navmenu({setTab , tab}) {
  return (
    <div className=" flex flex-grow items-center justify-center py-6">
      <ul className="menu gap-2 rounded-box bg-base-200 lg:menu-horizontal">
        <li className="disabled">
          <a className=" text-sky-400 uppercase font-bold">{`Bird's`} Valley</a>
        </li>
        <li onClick={() => setTab("bill")}>
          <a className={`${tab === "bill" ? "active" : ""}`}>
            <RiBillLine />
            Bill Receipt
          </a>
        </li>
        <li onClick={() => setTab("track")}>
          <a className={`${tab === "track" ? "active" : ""}`}>
            <TbLocationFilled />
            Tracking Receipt
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navmenu;
