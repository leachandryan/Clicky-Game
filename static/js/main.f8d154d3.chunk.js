(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,i){},110:function(t,e,i){},112:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),r=i(27),c=i.n(r),s=(i(55),i(18)),o=i(19),l=i(21),m=i(20),p=i(22),u=i(115),g=(i(57),function(t){return n.a.createElement(u.a,null,n.a.createElement(u.a.Header,null,n.a.createElement(u.a.Brand,null,"Clicky Game")),n.a.createElement(u.a.Text,null,"Result ",t.count," | ",t.topScore),n.a.createElement(u.a.Text,null,t.gameMessage))}),d=i(113),h=(i(108),function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Bravely Click Away!")))}),k=i(114),f=(i(110),function(t){return n.a.createElement(k.a,{className:"card",src:t.image,thumbnail:!0,alt:t.id,onClick:function(){return t.handleClick(t.id)}})}),b=i(31),v=function(t){function e(){var t,i;Object(s.a)(this,e);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(i=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={count:0,topScore:0,gameMessage:"Click an image to begin!",cards:b},i.shuffle=function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),n=[t[a],t[e]];t[e]=n[0],t[a]=n[1]}i.setState({cards:t})},i.handleClick=function(t){if(i.state.cards[t-1].isClicked){var e=i.state.cards.map(function(t){return t.isClicked=!1,t});return i.shuffle(e),i.setState({count:0,cards:e,gameMessage:"Wrong! Game Over!"})}var a=i.state.cards.map(function(e){return e.id===t?(e.isClicked=!0,e):e});i.shuffle(a),i.checkTopScore(),i.setState({count:i.state.count+1,cards:a,gameMessage:"Correct!"})},i.checkTopScore=function(){if(i.state.count+1>i.state.topScore)return i.setState({topScore:i.state.count+1})},i}return Object(p.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.shuffle(b)}},{key:"render",value:function(){var t=this,e=this.state,i=e.cards,a=e.count,r=e.topScore,c=e.gameMessage;return n.a.createElement("div",null,n.a.createElement(g,{count:a,topScore:r,gameMessage:c}),n.a.createElement(h,null),n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Pick a Character but don't click on the same one more than once!"),i.map(function(e){return n.a.createElement(f,{id:e.id,key:e.id,image:e.img,handleClick:t.handleClick})})))}}]),e}(a.Component),y=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement(v,null)}}]),e}(a.Component);c.a.render(n.a.createElement(y,null),document.getElementById("root"))},31:function(t){t.exports=[{id:1,img:"https://static.tvtropes.org/pmwiki/pub/images/King-Arthur-and-Patsy-monty-python-380178_800_441_4926.jpg",isClicked:!1},{id:2,img:"https://static.tvtropes.org/pmwiki/pub/images/witch_bedevere_2880.jpg",isClicked:!1},{id:3,img:"https://static.tvtropes.org/pmwiki/pub/images/monty_python_holy_grail_sir_lancelot_3508.png",isClicked:!1},{id:4,img:"https://static.tvtropes.org/pmwiki/pub/images/tumblr_kymw2qKhun1qz4xjyo1_400_64.gif",isClicked:!1},{id:5,img:"https://static.tvtropes.org/pmwiki/pub/images/SirRobinMOT_6384.jpg",isClicked:!1},{id:6,img:"https://static.tvtropes.org/pmwiki/pub/images/brother_maynard_972.jpg",isClicked:!1},{id:7,img:"https://static.tvtropes.org/pmwiki/pub/images/Black-Knight-monty-python-380120_800_441_4197.jpg",isClicked:!1},{id:8,img:"https://static.tvtropes.org/pmwiki/pub/images/Bridge_of_Death_6283.jpg",isClicked:!1},{id:9,img:"https://static.tvtropes.org/pmwiki/pub/images/killerrabbit_1929_5439.jpg",isClicked:!1},{id:10,img:"https://static.tvtropes.org/pmwiki/pub/images/The-Knights-Who-Say-Ni-monty-python-and-the-holy-grail-591173_1008_566_1562.jpg",isClicked:!1},{id:11,img:"https://static.tvtropes.org/pmwiki/pub/images/threeheadedknight.jpg",isClicked:!1},{id:12,img:"https://static.tvtropes.org/pmwiki/pub/images/montypythonholygrailtim_4078.jpg",isClicked:!1}]},49:function(t,e,i){t.exports=i(112)},55:function(t,e,i){},57:function(t,e,i){}},[[49,2,1]]]);
//# sourceMappingURL=main.f8d154d3.chunk.js.map