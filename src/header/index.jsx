import React from "react";
import "./header.css"

function Header (){
    const leftItem =[
        {
            id:0,
            name:'米尔豪斯',
        },
        {
            id: 1,
            name: '死亡之翼',            
          },
          {
            id: 2,
            name: '萨尔',
            
          },
          {
            id: 3,
            name: '阿尔萨斯',
            
          },
          {
            id:4,
            name:'希尔瓦娜斯'
          }
    ];
    const leftList = leftItem.map(leftItem => <li key={leftItem.id}><a href="/"><span>{leftItem.name}</span></a></li>);

    const rightItem =[
        {
            id:0,
            name:'登录'
        },
        {
            id:1,
            name:'消息'
        },
        {
            id:2,
            name:'收藏'
        },
        {
            id:3,
            name:'历史'
        },
        {
            id:4,
            name:'攻略'
        },
        {
            id:5,
            name:'下载客户端'
        },
    ];
    const rightList =rightItem.map(rightItem => <li key={rightItem.id}><a href="/"><span>{rightItem.name}</span></a></li>);

   const handleClickOnSearch = () => {alert('搜索引擎过载中~~~~~~')};

    return( 
        

      <div className="header">
        <div className="nav">
       
            <ul className="left-nav">
                {leftList}
                {/* <li><a href="/"><span>左侧导航</span></a></li>
                <li><a href="/"><span>左侧导航</span></a></li>
                <li><a href="/"><span>左侧导航</span></a></li>
                <li><a href="/"><span>左侧导航</span></a></li> */}
            </ul>
        
            <div className="search-content" >
            <input type="text" className="search-input" />
            <div className="search-button" >
                <span onClick={handleClickOnSearch}>
                <svg width="17" 
                height="17" 
                viewBox="0 0 17 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z" fill="currentColor"></path></svg>
                </span>
            </div>
            </div>          
        
        
            <ul className="right-nav">
                {rightList}
                {/* <li><a href="/"><span>右侧导航</span></a></li>
                <li><a href="/"><span>右侧导航</span></a></li>
                <li><a href="/"><span>右侧导航</span></a></li>
                <li><a href="/"><span>右侧导航</span></a></li>
                <li><a href="/"><span>右侧导航</span></a></li> */}
            </ul>
        
        </div>
        
      </div>)
}
export default Header;