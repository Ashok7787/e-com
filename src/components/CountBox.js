import { useState } from "react";
function CountBox() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      <div>
        <div className=" w-20 flex flex-row">
          <button
            type="button"
            onClick={decNum}
            className="w-10  rounded border border-red-600 text-red-600 bg-white"
          >
            -
          </button>

          <input
         style={{width:"40px",margin:"5px",borderWidth:"2px",borderColor: "gray"}}
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={incNum}
            className="w-10 rounded border border-green-600 text-green-600 bg-white"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
export default CountBox;
