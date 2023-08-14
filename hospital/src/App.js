function App() {
  const handleNavigateDriver = () => {
    const url =
      'https://drive.google.com/drive/folders/19UB4kNww2-FKqkO43op39X3IcwcdEE70?fbclid=IwAR0Ot9Gs8aSNVARGnVrttQgHzQca0AOyI6H1ntkpacG3ykVnTQE4aodqUUA';
    window.location.href = url;
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="bg-background object-contain object-cover h-full w-full bg-repeat-round"
        style={{ imageRendering: 'pixelated' }}
      >
        <div className="w-full flex justify-center ">
          <div>
            {/* w-[calc(100%)] */}
            <div className="text-[4rem] mt-[9rem] italic text-[#fff] font-medium font-black shadow-lg">
              HealhHubTTYTQ3
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleNavigateDriver}
                className="text-white bg-[#546ec1] hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                DỮ LIỆU
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
