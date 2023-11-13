import React from 'react';
import {Link,} from "react-router-dom";
import {data} from "../shared/data";

function Works() {

    console.log([...data]);
    //const Navigate =  useNavigate();
   // const location = useLocation();

   // console.log('location', location);
    return (
        <div>
            <h3>할일 목록</h3>
            {
                data.map((item) =>{
                    return (
                        <div key={item.id}>
                            {item.id}
                            &nbsp;
                            <Link to={`/Work/${item.id}`}>{item.todo}</Link>
                        </div>
                    )
                })
            }
            Works
            <br/>
            <button>
                 Home으로 이동
            </button>
            <br/>
            <Link to="/Contact">contact 페이지로 이동하기</Link>
        </div>
    )
}

export default Works;