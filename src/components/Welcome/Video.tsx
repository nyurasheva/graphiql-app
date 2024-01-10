import graphqlVideo from '/src/assets/video/GraphQL.mp4';

const Video = () => {
  return (
    <div className="video">
      <video
        className="video__content"
        src={graphqlVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export { Video };
