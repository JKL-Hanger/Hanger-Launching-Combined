import styled from "styled-components";

export default function Vid() {
  return (
    <div>
      <Video controls>
        <source src="../assets/video.mp4" type="video/mp4" />
      </Video>
    </div>
  );
}

const Video = styled.video`
  width: 100%;
  height: 589px;
  position: absolute;
  top: 0;
  left: 0;
`;
