import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChalkboardTeacher,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <h1 style={{ color: 'black' }}>Trusted By</h1>

      <div className="element">

        {/* CARD 1 */}
        <div className="sc-dtBdUo">
          <div className="sc-dtInlm">
            <div className="sc-cWSHoV">
              <div className="value" style={{ color: 'black' }}>100+</div>
              <div className="name" style={{ color: 'black' }}>COLLEGES </div>
            </div>
          </div>
          <div className="eHqdkl"></div>
          <div className="sc-kOHTFB">
            <div className="icon-inner">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="sc-dtBdUo top-color">
          <div className="eHqdkl"></div>
          <div className="sc-dtInlm">
            <div className="sc-cWSHoV">
              <div className="value" style={{ color: 'black' }}>150</div>
              <div className="name" style={{ color: 'black' }}>PROFESSIONAL TRAINERS</div>
            </div>
          </div>
          <div className="sc-kOHTFB bottom">
            <div className="icon-inner">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="sc-dtBdUo">
          <div className="sc-dtInlm">
            <div className="sc-cWSHoV">
              <div className="value" style={{ color: 'black' }}>1000+</div>
              <div className="name" style={{ color: 'black' }}>STUDY MATERIALS</div>
            </div>
          </div>
          <div className="eHqdkl"></div>
          <div className="sc-kOHTFB">
            <div className="icon-inner">
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="sc-dtBdUo top-color">
          <div className="eHqdkl"></div>
          <div className="sc-dtInlm">
            <div className="sc-cWSHoV">
              <div className="value" style={{ color: 'black' }}>1,00,000</div>
              <div className="name" style={{ color: 'black' }}>STUDENTS</div>
            </div>
          </div>
          <div className="sc-kOHTFB bottom">
            <div className="icon-inner">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
          </div>
        </div>

      </div>
    </TrustedByStyle>
  );
}; 

export default TrustedbyComponent;