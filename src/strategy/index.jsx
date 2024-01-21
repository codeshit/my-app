import React, { useState } from "react";
import './strategy.css'

function useInput (){
    const [value , setValue] = useState('')
    const onChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange,
    }
}

function AddStratrgyForm({addStrategy}){
    //const raids =useInput();
    console.log({addStrategy})
    const [raids,setRaids] =useState('')
    const [players,setPlayers] =useState('')
    const [difficulty,setDifficulty] =useState('')
    const [strategies,setStrategies] =useState('')
    const [drop,setDrop] =useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if(!raids) return 
        
        addStrategy({raids,players,difficulty,strategies,drop})        
        setRaids('')
        setPlayers('')
        setDifficulty('')
        setStrategies('')
        setDrop('')
    }
      
    return <form>
         {/* <input type="text" placeholder="输入副本名" {...raids}/> */}
        <input type="text" placeholder="输入副本名" value={raids} onChange={e=>setRaids(e.target.value)}/>       
        <input type="text" placeholder="输入副本人数" value={players} onChange={e=>setPlayers(e.target.value)}/>
        <input type="text" placeholder="输入副本难度" value={difficulty} onChange={e=>setDifficulty(e.target.value)}/>
        <input type="text" placeholder="输入副本攻略" value={strategies} onChange={e=>setStrategies(e.target.value)}/>
        <textarea name="输入副本掉落"  cols="23" rows="10" value={drop} onChange={e=>setDrop(e.target.value)}></textarea>
        <button onClick={handleSubmit}>发布攻略</button>
    </form>
}

function Strategy(){
     const [strategyMessage,setStrategyMessage] = useState([
        {
            id: 0,
            raids:'冰封王座',
            players:25,
            difficulty:'Hero',
            strategies:'要毛攻略，直接开。简单的一批，T拉住，N加好血，DPS猛抽',
            drop:'无敌的缰绳'

        },
        {
            id: 1,
            raids:'火源之地',
            players:40,
            difficulty:'Hero',
            strategies:'要毛攻略，直接开。简单的一批，T拉住，N加好血，DPS猛抽',
            drop:'你将成为不完整的男人'

        }
    ]);
   
    const showContent = strategyMessage.map((strategyMessages,index) => {
        return <div className="strategyItems" key={index}>
               <h1>副本名称：{strategyMessage[index].raids}</h1>
               <p>副本人数：{strategyMessage[index].players}</p>
               <p>副本难度：{strategyMessage[index].difficulty}</p>
               <p>副本攻略：{strategyMessage[index].strategies}</p>
               <p>副本掉落：{strategyMessage[index].drop}</p>
               </div>
    })
    const addStrategy = (value) => {        
        const newItems = [...strategyMessage,value]
        setStrategyMessage(newItems)        
    }
    

    return <div className="strategyContent">
                <AddStratrgyForm addStrategy ={addStrategy}></AddStratrgyForm>
             {showContent}
        </div>
}
export default Strategy;