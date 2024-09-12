import { useState } from "react";
import { BsBing, BsGoogle } from "react-icons/bs";
import { FaYahoo } from "react-icons/fa";
import { RiTreeFill } from "react-icons/ri";
import { SiDuckduckgo } from "react-icons/si";

export default function EngineSelect({properties, setProperties}) {
    let [isEngineSelectOpen, setIsEngineSelectOpen] = useState(false);
    let returnValue;
    let getIcon = (name) => {
        switch(name) {
            case "google":
                return(
                    <BsGoogle
                        size={properties.engineSelectIconSize}
                        color={properties.engineSelectIconColor}
                        onClick={() => {iconClick(name)}}
                        className={"engineIcon"}
                    />
                );
            case "duckduckgo":
                return(
                    <SiDuckduckgo
                        size={properties.engineSelectIconSize}
                        color={properties.engineSelectIconColor}
                        onClick={() => {iconClick(name)}}
                        className={"engineIcon"}
                    />
                );
            case "bing":
                return(
                    <BsBing 
                        size={properties.engineSelectIconSize}
                        color={properties.engineSelectIconColor}
                        onClick={() => {iconClick(name)}}
                        className={"engineIcon"}
                    />
                );
            case "yahoo":
                return(
                    <FaYahoo
                        size={properties.engineSelectIconSize}
                        color={properties.engineSelectIconColor}
                        onClick={() => {iconClick(name)}}
                        className={"engineIcon"}
                    />
                );
            case "ecosia":
                return(
                    <RiTreeFill
                        size={properties.engineSelectIconSize}
                        color={properties.engineSelectIconColor}
                        onClick={() => {iconClick(name)}}
                        className={"engineIcon"}
                    />
                );
            default:
                return(<></>);
        }
    };

    function iconClick(name) {
        let result = {...properties};
        result.currentEngine = name;
        setProperties(result);
    };

    if(isEngineSelectOpen) {
        returnValue = (
            <div className="engineSelect">
                {getIcon(properties.currentEngine)}
                {properties.currentEngine !== "google" && getIcon("google")}
                {properties.currentEngine !== "duckduckgo" && getIcon("duckduckgo")}
                {properties.currentEngine !== "bing" && getIcon("bing")}
                {properties.currentEngine !== "yahoo" && getIcon("yahoo")}
                {properties.currentEngine !== "ecosia" && getIcon("ecosia")}
            </div>
        );
    } else if (!isEngineSelectOpen) {
        returnValue = (
            <>{getIcon(properties.currentEngine)}</>
        );
    }
    return(
        <div className="engineSelectContainer">
            <button
                onClick={() => {setIsEngineSelectOpen(!isEngineSelectOpen)}}
                type="button"
                className="engineSelectButton"
            >
                {returnValue}
            </button>
        </div>
    );
};