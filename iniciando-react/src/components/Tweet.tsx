import { Subtweet } from "./Subtweet";

type TweetProps = {
  text: string;
};

export function Tweet(props: TweetProps) {
  return (
    <div>
      <p>{props.text}</p>
      <Subtweet text={props.text + " " + " Subtweet"} />
    </div>
  );
}
