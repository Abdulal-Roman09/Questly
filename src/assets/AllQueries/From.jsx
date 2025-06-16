import React from 'react'

const From = () => {
  return (
    <div>
       {/* Comment Input */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-md mx-auto mt-10">
          <h3 className="text-xl font-semibold">Leave a Comment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Share your thoughts with us.
          </p>

          <form
            
            className="mt-4 flex flex-col gap-2 border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
          >
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full p-3 text-sm text-gray-900 dark:text-white bg-transparent outline-none"
              required
            />
             <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write your comment here..."
              className="w-full p-3 text-sm text-gray-900 dark:text-white bg-transparent outline-none"
              required
            />
            {/* <button
              type="submit"
              className="bg-teal-600 text-white px-4 hover:bg-teal-700 transition"
            >
              Send
            </button> */}
          </form>
        </div>
    </div>
  )
}

export default From
