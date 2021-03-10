import { Project } from "./model/Project";
import BPMTapperThumbnail from "./res/bpm_tapper_thumbnail.png";
import PortfolioWebsiteThumbnail from "./res/portfolio_website_thumbnail.png";

export const ProjectsList: Project[] = [
  {
    id: "bpmtapper",
    name: "BPM Tapper",
    thumbnail: BPMTapperThumbnail,
    url: "https://christopherbussick.github.io/bpm-tapper/",
    description: `A bpm tapper is a tool used in music production to figure out the tempo of a song, measured in beats per minute (bpm). 
    The tool is usually part of a DAW (digital audio workstation), installed on a computer. This project is meant to make the tool browser-based.`,
  },
  {
    id: "portfolio",
    name: "Portfolio Website",
    thumbnail: PortfolioWebsiteThumbnail,
    url: "https://www.christopherbussick.com/",
    description: `The website you are currently on! It serves as my digital portfolio.`,
  },
];
