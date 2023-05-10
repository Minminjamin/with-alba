import React from "react";

const PostingCard = ({ postingData, clickEvent }: any) => {
  return (
    <div className="mx-3">
      {postingData.map((posting: any) => (
        <div
          key={posting.title}
          onClick={() => clickEvent(posting.title, posting.userId)}
          className="rounded-lg border-2 flex flex-col items-start content-between justify-evenly shadow-lg cursor-pointer my-5 lg:w-1/5 lg:h-52 lg:my-10 md:w-1/2"
        >
          <h3 className="font-bold lg:text-xl text-center w-full justify-items-center text-base">
            {posting.title}
          </h3>
          <span className="ml-4 lg:text-lg text-sm">{posting.deadline}</span>
          <span className="ml-4 lg:text-lg text-sm">나이 : {posting.age}</span>
          <span className="ml-4 lg:text-lg text-sm">{posting.address}</span>
        </div>
      ))}
    </div>
  );
};

export default PostingCard;
