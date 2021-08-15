import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Topbar from './Topbar';

export default function App() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let main = await axios.get(`https://60f460de3cb0870017a8a216.mockapi.io/products`);
      setDatas([...main.data]);
    }
    fetchData();
  },[]);
  return (
    <>
      <Topbar></Topbar>
      <div className="App">
      {datas.map((el) => {
        return (
          <Card key={el.id} data={el}></Card>
        );
      })}
      </div>
    </>
  );
}
