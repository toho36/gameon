export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-8">Registration Form</h1>
      <div className="w-full px-4 max-w-7xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeExs5B-2MmyZ7vwZ5DlPqIXpNSD1fp6rszHAqlSimxnZUFzA/viewform?embedded=true"
          style={{ width: '100%', height: '800px' }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Registration Form"
        >
          Loading
        </iframe>
      </div>
    </div>
  );
}
