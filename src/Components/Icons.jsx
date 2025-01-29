import { FaRegCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
function Icons({ name }) {
  switch (name) {
    case "circle":
      return <FaRegCircle size={30} color="#F3B431" className="flex ml-24 " />;
    case "cross":
      return <FaTimes size={30} color="#FF4848" className="flex ml-24" />;
    default:
      return <FaPencil size={30} className="flex ml-24" />;
  }
}
export default Icons;
