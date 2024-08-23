import back from '../assets/icons/back.svg';
import change from '../assets/icons/change.svg';
import download from '../assets/icons/download.svg';
import copy from '../assets/icons/copy.svg';
import twitter from '../assets/icons/twitter.svg';

export default function Action({
  handleBackClick,
  handleChangeClick,
  handleCopyClick,
  handleDownloadClick,
  handleShareClick,
}: {
  handleBackClick: () => void,
  handleChangeClick: () => void,
  handleCopyClick: () => void,
  handleDownloadClick: () => void,
  handleShareClick: () => void,
}) {
  return (
    <div className="flex mt-12 justify-center gap-5">
      <button onClick={handleBackClick} className="btn">
        <img src={back} alt="Back" />
      </button>
      <button onClick={handleChangeClick} className="btn">
        <img src={change} alt="Change" />
      </button>
      <button onClick={handleDownloadClick} className="btn">
        <img src={download} alt="Download" />
      </button>
      <button onClick={handleCopyClick} className="btn">
        <img src={copy} alt="Copy" />
      </button>
      <button onClick={handleShareClick} className="btn">
        <img src={twitter} alt="Tweet qoute" />
      </button>
    </div>
  );
}
