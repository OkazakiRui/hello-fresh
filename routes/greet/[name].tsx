/** @jsx h  */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  // console.log(props);
  const propsString = JSON.stringify(props);

  return (
    <div>
      <p>Greetings to you, {name}!</p>
      <hr />
      <small>{propsString}</small>
    </div>
  );
}
