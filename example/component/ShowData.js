import React from 'react'
import Links from './Links'

let ShowData = React.createClass({
    handleClick(e){
        var target = e.target;
        if(target.nodeName==='BUTTON'){
            var url = target.value;
            this.props.getUrl(url)  //getUrl为mapDispatchToProps中的key,触发一个action动作（fetchData返回数据源）
        }
    },
    render() {
        const { source,url} = this.props
        //遍历获取的数据start
        let item = source.map(function(item){
            return <Links title={item.title} url={item.url} />
        })
        //遍历获取的数据end
        return (
            <div onClick={ this.handleClick }>
                <button value="https://www.reddit.com/r/reactjs.json">显示reactjs</button>
                <button value="https://www.reddit.com/r/frontend.json">显示frontend</button>
                <div>
                    <p>地址：{ url }</p>
                    <ul>数据源：{ item }</ul>
                </div>
            </div>
        );
    }
})

export default ShowData;


