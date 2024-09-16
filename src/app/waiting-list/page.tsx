'use client';
import { useEffect, useRef } from 'react';

export default function WaitingList() {
  // Specify the ref type as HTMLIFrameElement or null
  const sheetRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Set the iframe to reload every 60 seconds (60000 ms)
    const intervalId = setInterval(() => {
      if (sheetRef.current) {
        sheetRef.current.src += ''; // Refreshes the iframe
      }
    }, 60000); // Adjust time as necessary

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full px-4 max-w-7xl flex justify-center">
        <iframe
          ref={sheetRef}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRzrXH8yWpsFf-6OB9ZgHN7kbYkjA0ZjAac5thG5e9UmX66ZOdcWvU3BzcOr0xkTDba2xFgTBiEJ5QY/pubhtml?gid=1582545733&single=true"
          style={{ width: '40%', height: '300px' }}
        ></iframe>
      </div>
      <h1 className="text-2xl font-bold mb-8">Waiting List Form</h1>
      <div className="w-full px-4 max-w-7xl flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSepbUYkdiBAQGNLdKxsBqHrkGOJUH-qnQmQjE5VsXlRh5nUXQ/viewform?embedded=true"
          style={{ width: '100%', height: '800px', maxWidth: '800px' }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Waiting List Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
