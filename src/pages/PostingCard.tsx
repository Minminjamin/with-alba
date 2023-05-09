import React from "react";

const PostingCard = ({ postingData, clickEvent }: any) => {
  return (
    <div className="mt-20">
      {postingData.map((posting: any) => (
        <div
          key={posting.title}
          onClick={() => clickEvent(posting.title, posting.userId)}
          className="rounded-lg border-2 w-1/5 flex flex-col items-start h-52 content-between justify-evenly shadow-lg cursor-pointer"
        >
          <h3 className="font-bold text-xl text-center w-full justify-items-center">
            {posting.title}
          </h3>
          <span className="ml-4 text-lg">{posting.deadline}</span>
          <span className="ml-4 text-lg">나이 : {posting.age}</span>
          <span className="ml-4 text-lg">{posting.address}</span>
        </div>
      ))}
    </div>
  );
};

export default PostingCard;
