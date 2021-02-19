import React from "react";
import styled from "styled-components";
import Article from "./Article";
import MeImg from "../res/me_5x7.png";
import MonitorIcon from "../res/monitor.png";
import CurlyBracketsIcon from "../res/curly_brackets.png";
import TagIcon from "../res/tag.png";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <StyledHome>
      <div className="left-column">
        <StyledArticleTest
          heading="Christopher Bussick"
          subheading="Full Stack Web, App and VR Development"
          text="This site is currently being reworked!"
        />
        <div className="icon-container">
          <div className="icon-container-left">
            <img className="monitor-icon" src={MonitorIcon} alt="A monitor" />
          </div>
          <div className="icon-container-right">
            <img className="tag-icon" src={TagIcon} alt="A closing tag" />
            <img
              className="curly-icon"
              src={CurlyBracketsIcon}
              alt="Curly brackets"
            />
          </div>
        </div>
      </div>
      <img className="profile-img" src={MeImg} alt="Christopher Bussick" />
    </StyledHome>
  );
};

// "Normal" react components need to be wrapped into a styled() factory to make it eligible for interpolation.
// - See: https://styled-components.com/docs/advanced#referring-to-other-components
const StyledArticleTest = styled(Article)``;

const StyledHome = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  padding: 125px 125px;

  .left-column {
    /* width: 50%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    .icon-container {
      display: flex;
      align-items: flex-end;

      /* Necessary to keep the icons aligned with the text because using "transform: rotate()" basically ignores the original container */
      margin-left: 12px;

      img {
        filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.25));
        object-fit: contain;
      }

      .icon-container-left {
        display: flex;
        margin-right: 15px;

        .monitor-icon {
          transform: rotate(-19.75deg);
          max-height: 100px;
        }
      }

      .icon-container-right {
        display: flex;
        flex-direction: column;

        .tag-icon {
          transform: rotate(-0.24deg);
          max-height: 75px;
          margin-bottom: 20px;
        }

        .curly-icon {
          transform: rotate(7.89deg);
          max-height: 60px;
        }
      }
    }
  }

  ${StyledArticleTest} {
    margin-bottom: 35px;
  }

  .profile-img {
    /* Adds a linear gradient to the border */
    border: 18px solid;
    border-image: ${(props) =>
      "linear-gradient(90deg, " +
      props.theme.colors.primary +
      " 0%, " +
      props.theme.colors.secondary +
      " 100%)"};
    border-image-slice: 1;

    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.5));
    max-width: 331px;
    max-height: 464px;
  }
`;
export default Home;
