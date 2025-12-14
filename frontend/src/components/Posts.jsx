import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { api_base_url } from '../Helper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Posts = () => {

  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [openCommentPostId, setOpenCommentPostId] = useState(null);
  const [commentText, setCommentText] = useState("");

  const getPosts = () => {
    fetch(api_base_url + "/getPosts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setData(data.data);
        else toast.error(data.msg);
      });
  };

  const toggleLike = (id) => {
    fetch(api_base_url + "/toggleLike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        postId: id
      })
    })
      .then(res => res.json())
      .then(() => getPosts());
  };

  const addComment = (postId) => {
    if (!commentText.trim()) return;

    fetch(api_base_url + "/addComment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        postId,
        text: commentText
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCommentText("");
          getPosts();
        } else {
          toast.error(data.msg);
        }
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Posts mt-5 pb-[60px]">
      {data && data.map((item) => (
        <div key={item.post._id} className="post mb-3">

          {/* Header */}
          <div className="flex px-[10px] items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                onClick={() => navigate(`/profile/${item.user._id}`)}
                className='w-[40px] h-[40px] rounded-full object-cover'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFVRKy8icz_Ek8WX4ejQUgYdsCVR0arEfTA&s"
                alt=""
              />
              <div>
                <p>{item.user.username}</p>
                <p className='text-[12px] text-gray-400'>
                  Join In {new Date(item.user.date).toDateString()}
                </p>
              </div>
            </div>
            <HiDotsVertical />
          </div>

          {/* Image */}
          <img
            className='mt-3 w-full'
            src={api_base_url + "/uploads/" + item.post.image}
            alt=""
          />

          {/* Actions */}
          <div className='px-[10px]'>
            <div className="flex mt-3 items-center justify-between">
              <div className="flex items-center gap-[15px]">
                <i onClick={() => toggleLike(item.post._id)}>
                  {item.post.isYouLiked ? <FaHeart className="text-pink-600" /> : <FaRegHeart />}
                </i>

                <i onClick={() =>
                  setOpenCommentPostId(
                    openCommentPostId === item.post._id ? null : item.post._id
                  )
                }>
                  <FaRegComment />
                </i>

                <FiSend />
              </div>
              <FaRegBookmark />
            </div>

            <p className='text-[13px] text-gray-400 mt-1'>
              {item.post.likes} Likes
            </p>

            <p className='text-[14px]'>
              <b>{item.user.username}</b> {item.post.caption}
            </p>

            {/* COMMENTS SECTION */}
            {openCommentPostId === item.post._id && (
              <div className="mt-2">

               
                {item.post.comments && item.post.comments.map((c, i) => (
                  <p key={i} className="text-[13px]">
                    <b>{c.userName}</b> {c.text}
                  </p>
                ))}

                
                <div className="flex mt-2 gap-2">
                  <input
                    className="flex-1 text-[13px] bg-transparent outline-none"
                    placeholder="Add your comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    onClick={() => addComment(item.post._id)}
                    className="text-blue-500 text-[13px]"
                  >
                    Post
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
