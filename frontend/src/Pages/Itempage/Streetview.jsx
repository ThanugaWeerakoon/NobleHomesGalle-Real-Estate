import React, { useEffect, useRef } from "react";

export default function StreetView() {
  const streetViewRef = useRef(null);

  useEffect(() => {
    // Function to load Google Maps JavaScript API
    const loadGoogleMapsScript = () => {
      if (document.querySelector('script[src*="maps.googleapis.com"]')) return; // Prevent duplicate scripts
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly&libraries=places`; // Replace with your API key
      script.async = true;
      script.onload = () => {
        initializeStreetView();
      };
      document.body.appendChild(script);
    };

    const initializeStreetView = () => {
      if (window.google && streetViewRef.current) {
        const panorama = new window.google.maps.StreetViewPanorama(
          streetViewRef.current,
          {
            position: { lat: 40.748817, lng: -73.985428 }, // Example coordinates
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
          }
        );
      } else {
        console.error("Google Maps API is not available.");
      }
    };

    loadGoogleMapsScript();
  }, []);

  return <div id="street-view" ref={streetViewRef} style={{ height: "400px", width: "100%" }} />;
}
