import video from '../../public/video/vvv.mp4'

function TestVideo() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center p-4 z-3">
        <h2 className="text-2xl font-bold mb-4">Videography</h2>
        <div className="w-full max-w-4xl">
          <video
            src={video}
            width="600"
            height="300"
            controls="controls"
            autoPlay="true"
          />
        </div>
      </div>
    </div>
  );
}

export default TestVideo
