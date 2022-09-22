import React, {useState} from 'react'
import Clock from '../Clock'
import List from '../Util/List'

const bodyContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 
  height: '100vh',
  backgroundColor: 'white',
  backgroundImage: 'url(https://hbr.org/resources/images/article_assets/2020/08/Aug20_06_84753778.jpg)',
  padding: '10px',
  backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}

const todoListContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight:'150px',
  marginTop : '150px',
  marginBottom:'90px',
  marginLeft:'130px',
  flexDirection: 'column',
  backgroundColor: 'rgb(231, 219, 148)',
  backgroundImage: 'url(https://thumbs.dreamstime.com/b/todo-list-seamless-pattern-universal-background-66678083.jpg)',
  borderRadius: '10px',
  width: '600px',
  boxShadow: '0 0 10px 0 rgba(255,255,255,.5',
}
const pic = {
  
 
  mixBlendMode: 'multiply',
  //  mixBlendMode: 'color-dodge',
  // // mixBlendMode: 'exclusion',
  float:'Right',
  height:'190px',

  marginRight:'50px',

marginLeft:'300px',
// flexDirection: 'column',
}

function App() {
  return (
    <div style={bodyContainer}>
       
      <Clock></Clock>
     
        <div style={todoListContainer}>
            <h1 >Hash's Todo</h1>

            {/* LIST */}
            <List/>
            
        </div>
        <div style={pic}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc2h0diOVc2H293leTUmdlLz4TTkiap3Ovt5kaS-THF28mlxirFHUTTfvpE-SZhMrVwQ&usqp=CAU'></img>
       </div>
    </div>
  )
}

export default App