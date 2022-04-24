type Subtweet = {
  text: string;
};

export function Subtweet(props: Subtweet) {
  return <p>{props.text}</p>;
}
