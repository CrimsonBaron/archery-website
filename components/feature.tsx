import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

interface IFeature {
  isFeature: boolean;
}

const Feature: React.FC<IFeature> = function FeatureComponent({ isFeature }) {
  return (
    <>
      <div className="font-bold text-lg text-center">
        {isFeature ? (
          <FaCheck className="text-success-300" />
        ) : (
          <ImCross className="text-danger-300" />
        )}
      </div>
      <div className="flex-1" />
    </>
  );
};

export default Feature;
