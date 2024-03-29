import React from "react";
import styled from "styled-components";
import Link from "next/link";

const RecipePostBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 9px;
  cursor: pointer;
`;

const RecipePostImg = styled.img`
  display: flex;
  position: relative;
  object-fit: cover;
  margin-right: 10px;
  flex: 3;
  border-radius: 9px;
`;

const RecipePostContent = styled.div`
  display: row;
  position: relative;
  margin-left: 5px;
  flex: 5;
`;

const RecipePostDetails = styled.div`
  display: flex;
  padding-top: 2%;
  align-items: center;
`;

const RecipePostDetailsMin = styled.div`
  display: flex;
  padding-right: 35px;
  color: #7d7d7d;
`;

const RecipePostUpDown = styled.div`
  display: flex;
`;

const RecipePostUp = styled.div`
  display: flex;
  position: relative;
  padding-right: 10%;
  padding-top: 21px;
`;

const RecipePostUpText = styled.div`
  display: flex;
  position: relative;
  margin: 5px;
`;

const Title = styled.h3`
  margin-top: 0px;
`;

const Icon = styled.img`
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;
const RecipePost = ({ title, time, name, img, link, up, down }) => {
  return (
    <Link href={link}>
      <RecipePostBox>
        <RecipePostImg src={img} />
        <RecipePostContent>
          <Title>{title}</Title>
          <RecipePostDetails>
            <RecipePostDetailsMin>{time}</RecipePostDetailsMin>
            <RecipePostDetailsMin>{name}</RecipePostDetailsMin>
          </RecipePostDetails>
          <RecipePostUpDown>
            <RecipePostUp>
              <Icon src="/icons/recipe/upvote.svg" />
              {/* get Data from database */}
              <RecipePostUpText>{up}</RecipePostUpText>
            </RecipePostUp>
            <RecipePostUp>
              <Icon src="/icons/recipe/downvote.svg" />
              {/* get Data from database */}
              <RecipePostUpText>{down}</RecipePostUpText>
            </RecipePostUp>
          </RecipePostUpDown>
        </RecipePostContent>
      </RecipePostBox>
    </Link>
  );
};

RecipePost.defaultProps = {
  title: "Mooncake quickly",
  time: "40m",
  img: "/img/food/mooncake.png",
  name: "Jenny Tran",
  link: "/welcome",
  up: "200",
  down: "200"
};

export default RecipePost;
