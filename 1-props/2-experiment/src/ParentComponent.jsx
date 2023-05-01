import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const someFunction = () => {
    console.log("someFunction");
  };
  return (
    <div>
      <ChildComponent function={someFunction} />
    </div>
  );
}

export default ParentComponent;
