import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../store/counter/counterSlice";
import {RootState, fetchUsers} from "../../store";
import {useEffect} from "react";

const Home = () => {

  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter.value)
  const {loading, error, data}= useSelector((state: RootState) => state.users)

  const handleClick = (dec?: string)=>{
    if(dec){
      return dispatch(decrement())
    }
   dispatch(increment())
  }


  useEffect(()=>{

    dispatch(fetchUsers())
  }, [])




  return <div style={{display: 'flex', flexDirection: 'column'}}>
    Counter: {counter}
    <button onClick={()=>handleClick()}>
      Increment
    </button>
    <button onClick={()=>handleClick('dec')}>
      Decrement
    </button>
    {error && <div>{error}</div>}
    {loading ? 'LOADING': data.map(user=><div key={user.id}>{user.email}</div>)}
    </div>
}

export default Home
