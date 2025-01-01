// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import AuthorCard from "@/components/AuthorCard";
// import { useParams } from "next/navigation";
// import { dummyPosts } from "@/components/postdata";

// interface Comment {
//   id: number;
//   author: string;
//   content: string;
//   date: string;
// }

// export default function BlogPost() {
//   const params = useParams(); // Use useParams hook
//   const postId = params.id; // Access params.id directly

//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState("");

//   const currentPost = dummyPosts.find((post) => post.id === postId);

//   if (!currentPost) {
//     return <div>Post not found</div>;
//   }

//   // Load comments from localStorage on component mount
//   useEffect(() => {
//     const savedComments = localStorage.getItem(`comments-${postId}`);
//     if (savedComments) {
//       setComments(JSON.parse(savedComments));
//     }
//   }, [postId]);

//   // Save comments to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
//   }, [comments, postId]);

//   const handleSubmitComment = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newComment.trim()) {
//       const comment: Comment = {
//         id: comments.length + 1,
//         author: "Anonymous",
//         content: newComment.trim(),
//         date: new Date().toLocaleDateString(),
//       };
//       setComments([...comments, comment]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <Image
//         src={currentPost.coverImage}
//         alt={currentPost.title}
//         width={800}
//         height={400}
//         className="w-full h-64 object-cover rounded-lg mb-8"
//       />
//       <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
//         {currentPost.title}
//       </h1>
//       <div className="text-gray-600 mb-8">
//         Published on {currentPost.date} by {currentPost.author.name}
//       </div>
//       <div
//         className="prose prose-lg mb-12"
//         dangerouslySetInnerHTML={{ __html: currentPost.content }}
//       />

//       <AuthorCard
//         name={currentPost.author.name}
//         bio={currentPost.author.bio}
//         avatarUrl={currentPost.author.avatarUrl}
//       />

//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Comments</h2>
//         {comments.map((comment) => (
//           <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
//             <div className="font-semibold">{comment.author}</div>
//             <div className="text-gray-600 text-sm mb-2">{comment.date}</div>
//             <p>{comment.content}</p>
//           </div>
//         ))}
//         <form onSubmit={handleSubmitComment} className="mt-8">
//           <textarea
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Leave a comment..."
//             className="w-full p-2 border rounded-lg mb-4"
//             rows={4}
//           />
//           <button
//             type="submit"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
//           >
//             Submit Comment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import { useParams } from "next/navigation";
import { dummyPosts } from "@/components/postdata";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

export default function BlogPost() {
  const params = useParams(); // Use useParams hook
  const postId = params.id; // Access params.id directly

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const currentPost = dummyPosts.find((post) => post.id === postId);

  // Always initialize comments on mount, even if currentPost is null
  useEffect(() => {
    if (postId) {
      const savedComments = localStorage.getItem(`comments-${postId}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }
  }, [postId]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (postId) {
      localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
    }
  }, [comments, postId]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "Anonymous",
        content: newComment.trim(),
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  // Return early if the post is not found
  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Image
        src={currentPost.coverImage}
        alt={currentPost.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {currentPost.title}
      </h1>
      <div className="text-gray-600 mb-8">
        Published on {currentPost.date} by {currentPost.author.name}
      </div>
      <div
        className="prose prose-lg mb-12"
        dangerouslySetInnerHTML={{ __html: currentPost.content }}
      />

      <AuthorCard
        name={currentPost.author.name}
        bio={currentPost.author.bio}
        avatarUrl={currentPost.author.avatarUrl}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="font-semibold">{comment.author}</div>
            <div className="text-gray-600 text-sm mb-2">{comment.date}</div>
            <p>{comment.content}</p>
          </div>
        ))}
        <form onSubmit={handleSubmitComment} className="mt-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full p-2 border rounded-lg mb-4"
            rows={4}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}
