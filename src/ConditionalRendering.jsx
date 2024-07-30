export function ConditionalRendering({ favNo }) {
    let value = 5
    return (
      <div>
        <h3>Conditional Rendering</h3>
        {favNo != null && `My Favourite Number is ${favNo}`} and&nbsp;
        {favNo > value
          ? `it is larger than ${value}.`
          : `it is smaller than ${value}.`}
      </div>
    );
}