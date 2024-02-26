export const UiButton = (props: any) => {
  const classes = props.isClicked ? "ui-button clicked" : "ui-button";
  const number = props.isClicked ? props.number + 1 : props.number;

  return (
    <button className={classes} id={props.text} onClick={() => props.onClick()}>
      <span className="ui-icon">{props.icon} </span>
      {number}
    </button>
  );
};

const ButtonBox = (props: { likeIsClicked: boolean; likes: number }) => {
  const toggleLike = () => {
    props.likeIsClicked = !props.likeIsClicked;
  };

  return (
    <div>
      <UiButton
        icon="♥"
        text="likes"
        number={props.likes}
        onClick={toggleLike}
        isClicked={props.likeIsClicked}
      />
    </div>
  );
};
export const UiCard = (props: { content: any }) => {
  let { image, title, content } = props.content;
  return (
    <div className="card-wrapper">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};

export const SocialCard = (props: {
  content: any;
  likeIsClicked: boolean;
  likes: number;
}) => {
  return (
    <div className="card-body">
      <UiCard content={props.content} />
      <div className="line"></div>
      <div style={{ textAlign: "right" }}>
        <ButtonBox likeIsClicked={props.likeIsClicked} likes={props.likes} />
      </div>
    </div>
  );
};
