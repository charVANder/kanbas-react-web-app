export default function Anchors() {
  return (
    <div>
      <h4>Anchor tags</h4>
      Please{" "}
      <a id="wd-lipsum" href="https://www.lipsum.com" target="blank">
        click here{" "}
      </a>
      to get dummy text
      <br />
      <h4>Source Code Repositories</h4>
      Click{" "}
      <a
        id="wd-github"
        href="https://github.com/charVANder/kanbas-react-web-app/tree/a1"
        target="blank"
      >
        here{" "}
      </a>
      to jump to the a1 branch (assuming it hasn't been merged).
    </div>
  );
}
