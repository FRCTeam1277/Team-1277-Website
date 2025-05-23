import "./GoFundMe.css";
import { assetPathFixer } from "../../utils/assetPath";

export default function GoFundMe() {
  return (
    <div className="neuromorphic-inset gofundme">
      <img src={assetPathFixer("/graphics/GoFundMe_Logo.svg")} alt="GoFundMe" width={250} />
      <a href="https://gofund.me/b2d4baec" target="_blank" rel="noopener noreferrer">
        Donate
      </a>
    </div>
  );
}
