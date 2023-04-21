// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//     decrement,
//     increment,
//     incrementByAmount,
//     incrementAsync,
//     selectCount,
// } from './counterSlice';


// export function Counter() {
//     const count = useSelector(selectCount);
//     const dispatch = useDispatch();
//     const [incrementAmount, setIncrementAmount] = useState('2');

//     return (
//         <div>
//             <div >
//                 <button
//                     // className={styles.button}
//                     aria-label="Increment value"
//                     onClick={() => dispatch(increment())}
//                 >
//                     +
//                 </button>
//                 <span>{count}</span>
//                 <button
//                     // className={styles.button}
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(decrement())}
//                 >
//                     -
//                 </button>
//             </div>
//             <div >
//                 <input
//                     // className={styles.textbox}
//                     aria-label="Set increment amount"
//                     value={incrementAmount}
//                     onChange={e => setIncrementAmount(e.target.value)}
//                 />
//                 <button
//                     // className={styles.button}
//                     onClick={() =>
//                         dispatch(incrementByAmount(Number(incrementAmount) || 0))
//                     }
//                 >
//                     Add Amount
//                 </button>
//                 <button
//                     // className={styles.asyncButton}
//                     onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
//                 >
//                     Add Async
//                 </button>
//             </div>
//         </div>
//     );
// }
