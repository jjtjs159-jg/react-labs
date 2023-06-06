import { useEffect, useState } from "react";

import "./index.scss";

let globalCount = 0;

export default function Page() {
  console.log("페이지가 렌더링 되었습니다.");

  const [count, setCount] = useState(1);
  // const [decreaseCount, setDecreaseCount] = useState(1);
  const [fixedCount, setFixedCount] = useState(0);

  // const handleDecrease = () => {
  //   setDecreaseCount(decreaseCount - 1);
  // };

  // 리렌더링 될 때 마다 실행
  useEffect(() => {
    console.log("useEffect without deps array");
  });

  // 마운트 될 때만 실행
  useEffect(() => {
    console.log("useEffect with deps array");
  }, []);

  useEffect(() => {
    console.log(`global count > ${globalCount}`);
  });

  useEffect(() => {
    console.log(`increase count > ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`fixed count > ${fixedCount}`);
  }, [fixedCount]);

  // useEffect(() => {
  //   console.log(`increaseCount > ${increaseCount} / decreaseCount > ${decreaseCount} / "without" deps array`);
  // });

  // useEffect(() => {
  //   console.log(`increaseCount > ${increaseCount} / "without" deps`);
  // }, []);

  // useEffect(() => {
  //   console.log(`increaseCount > ${increaseCount} / decreaseCount > ${decreaseCount} / only "increaseCount"`);
  // }, [increaseCount]);

  // useEffect(() => {
  //   console.log(`increaseCount > ${increaseCount} / decreaseCount > ${decreaseCount} / with deps`);
  // }, [increaseCount, decreaseCount]);

  return (
    <div className="wrapper">
      <div className="button-group" role="group" aria-label="useEffect example">
        <button className="button" type="button" onClick={() => setCount(count + 1)}>
          count Increase
        </button>
        <button className="button" type="button" onClick={() => globalCount++}>
          global count Increase
        </button>
        <button className="button" type="button" onClick={() => setFixedCount(0)}>
          Fixed
        </button>
      </div>
      <div className="description">
        <h2>Object.is</h2>
        <ul>
          <li>
            <p>
              State인 Primitive Type이 변화되면 리렌더링이 발생되고 useEffect가 실행된다.
            </p>
          </li>
          <li>
            <p>
              State인 Primitive Type을 기존과 같이 유지한다면 리렌더링조차 발생하지 않는다.
            </p>
          </li>
          <li>
            <p>
              State가 아닌 Primitive Type은 변화되도 리렌더링이 발생하지 않는다. (단, 변수의 값은 변경되어있다.)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
