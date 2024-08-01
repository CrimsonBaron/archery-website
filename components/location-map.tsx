import React from "react";

const LocationMap: React.FC = function LocationMapComponent() {
  return (
    <div className="w-full h-[42rem] block rounded-2xl">
      <iframe
        className="w-full h-full rounded-2xl"
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1593.0301914293245!2d15.127933951100257!3d50.43947655794092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ea92bce5cf55f%3A0x9a57138c2fb4bc1f!2sLukost%C5%99elba%20Doln%C3%AD%20Bousov!5e1!3m2!1sen!2scz!4v1722170979682!5m2!1sen!2scz"
        title="google maps"
      />
    </div>
  );
};

export default LocationMap;
