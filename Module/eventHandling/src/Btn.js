import React from 'react'

// const clickHandler = () => console.log('clicked');
// export const Btn = () => {
//   return (
//     <button onClick={clickHandler}>
//       Ckick Me
//     </button>
//   );
// }

const clickHandler = () => console.log('mouse over');
export const Btn = () => {
  return (
    <button onMouseOver={clickHandler}>
      Ckick Me
    </button>
  );
}
