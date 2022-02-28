import { useEffect, useState } from "react";
import './Datafatch.css'

function Datafatch({inpVal,setinfo}){

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    if(inpVal !== 'bookName'){
      fetch(`http://openlibrary.org/search.json?q=${inpVal.replaceAll("+"," ")}`).then(val =>{
        return val.json()
      }).then(response => setPosts(response.docs) )
    }
  },[inpVal])


  function creatInfo(post){
    setinfo(
      <div className="info">
        <h3 className="h3">Author name </h3>
        <p className="p">{post.author_name}</p>

        <h3 className="h3">First publish year </h3>
        <p className="p">{post.first_publish_year}</p>

        <h3 className="h3">numFound</h3>
        <p className="p">{posts.length}</p>

      </div>
    )
  }


  return(
    <div className="item">
      <div className="Searchvaldiv">
        <h1 className="Searchval">{inpVal}</h1>
      </div>
      <ol>
        {
          posts.map((post) => <li className="li" onClick={()=>{creatInfo(post)}}>{post.title}</li>)
        }
      </ol>
    </div>
  )

}


export default Datafatch