import { useEffect, useState } from "react";

import "./index.scss";

let globalCount = 0;
let globalUser = { name: 'james', age: 30 };

export default function Page() {
  console.log("페이지가 렌더링 되었습니다.");

  const [count, setCount] = useState(1);
  const [fixedCount, setFixedCount] = useState(0);

  const [user, setUser] = useState({ name: 'jackson', age: 20 });

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
  }, [globalCount]);

  useEffect(() => {
    console.log(`increase count > ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`fixed count > ${fixedCount}`);
  }, [fixedCount]);

  useEffect(() => {
    console.log(`state object age > ${user.age}`);
  }, [user.age]);

  useEffect(() => {
    console.log(`state object > ${user.name} ${user.age}`);
  }, [user]);

  useEffect(() => {
    console.log(`global object age > ${globalUser.age}`);
  }, [globalUser.age]);

  useEffect(() => {
    console.log(`global object > ${globalUser.name} ${globalUser.age}`);
  }, [globalUser]);

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
        <button className="button" type="button" onClick={() => {
          user.age += 1;
          setUser(user);
        }}>
          update object property
        </button>
        <button className="button" type="button" onClick={() => setUser({ name: 'jackson', age: 20 })}>
          update object reference
        </button>
        <button className="button" type="button" onClick={() => { globalUser.age += 1; }}>
          update global object property
        </button>
        <button className="button" type="button" onClick={() => { globalUser = { name: 'james', age: 30 }; }}>
          update global object reference
        </button>
      </div>
      <div className="description">
        <h2>hooks - useEffect</h2>
        <h3>deps는 Object.is로 이전 값과 비교한다</h3>
        <p className="notice">
          Devtools의 console을 통해서 확인
        </p>
        <ul>
          <li>
            <p>
              State인 Primitive Type이 변경되면 리렌더링이 발생되고 useEffect가 실행된다.
            </p>
          </li>
          <li>
            <p>
              State인 Primitive Type을 기존과 같이 유지한다면 리렌더링이 발생하지 않는다.
            </p>
          </li>
          <li>
            <p>
              State가 아닌 Primitive Type은 변경되도 렌더링조차 발생하지 않는다. (단, 값은 변경되어있다.)
            </p>
          </li>
          <li>
            <p>
              State인 Object Type이 동일한 참조를 유지한다면 리렌더링이 발생하지 않는다.
            </p>
          </li>
          <li>
            <p>
              State인 Object Type이 참조가 변경된다면 리렌더링이 발생한다. (단, object property를 deps로 받는 useEffect는 동작하지 않는다.)
            </p>
          </li>
          <li>
            <p>
              State가 아닌 Object Type은 변경되도 렌더링조차 발생하지 않는다. (단, 값은 변경되어있다.)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
