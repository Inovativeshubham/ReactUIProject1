import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const Post = ({data, bgColor, color}) => {
  return (
    <>
        <div className="post_container" style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`
      }}>
            <div className="person">
                <div className="author">
                    <div className="img">
                        <img src={data.profileImg} alt="" />
                    </div>
                    <div className="text">
                        <h3>{data.userName}</h3>
                        <p>{data.title}</p>
                    </div>
                </div>
                <div className="dot"><BsThreeDotsVertical /></div>
            </div>
            <p>{data.description}</p>
            <div className="post_img">
                <img src={data.postImg} alt="" />
            </div>
            <div className="like_comment">
                <div className="likes"><FaHeart className='items' /> {data.like} </div>
                <div className="comments"><FaComment className='items' /> {data.comment} </div>
                <div className="share"><FaShare className='items' /> {data.share} </div>
            </div>
        </div>
    </>
  )
}

export default Post