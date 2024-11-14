import React, { useEffect, useRef } from "react";

export default function StreetView() {
  const streetViewRef = useRef(null);
  const googleMapsScriptUrl = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly&libraries=places`; // Replace with your API key

  useEffect(() => {
    let scriptLoaded = false;

    // Function to load Google Maps JavaScript API
    const loadGoogleMapsScript = () => {
      if (document.querySelector(`script[src="${googleMapsScriptUrl}"]`)) {
        // If script is already present, initialize directly
        initializeStreetView();
        return;
      }

      const script = document.createElement("script");
      script.src = googleMapsScriptUrl;
      script.async = true;
      script.onload = () => {
        scriptLoaded = true;
        initializeStreetView();
      };
      document.body.appendChild(script);
    };

    const initializeStreetView = () => {
      if (window.google && streetViewRef.current) {
        new window.google.maps.StreetViewPanorama(streetViewRef.current, {
          position: { lat: 48.8584, lng: 2.2945 }, // Eiffel Tower coordinates
          pov: { heading: 0, pitch: 0 },
          zoom: 1,
        });
      } else {
        console.error("Google Maps API is not available.");
      }
    };

    loadGoogleMapsScript();

    // Clean up script on component unmount
    return () => {
      if (scriptLoaded) {
        const script = document.querySelector(`script[src="${googleMapsScriptUrl}"]`);
        if (script) document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="street-view" ref={streetViewRef} style={{ height: "400px", width: "100%" }} />;
}
