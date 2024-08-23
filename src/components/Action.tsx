import back from '../assets/icons/back.svg';
import change from '../assets/icons/change.svg';
import download from '../assets/icons/download.svg';
import copy from '../assets/icons/copy.svg';
import share from '../assets/icons/share.svg';

export default function Action({
  handleBackClick
}: {
  handleBackClick: () => void
}) {
  return (
    <div className="flex mt-12 justify-center gap-5">
      <button onClick={handleBackClick} className="btn">
        <img src={back} alt="Back" />
      </button>
      <button className="btn">
        <img src={change} alt="Change" />
      </button>
      <button className="btn">
        <img src={download} alt="Download" />
      </button>
      <button className="btn">
        <img src={copy} alt="Copy" />
      </button>
      <button className="btn">
        <img src={share} alt="Share" />
      </button>
    </div>
  );
}
