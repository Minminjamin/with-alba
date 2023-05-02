import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const AlbaData = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div>
      <span>This is Alba Data Component</span>
    </div>
  );
};

export default AlbaData;
